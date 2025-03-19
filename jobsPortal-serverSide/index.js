const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "UnAuthorized Access" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "UnAuthorized Access" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mx4ls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const jobCollection = client.db("job-portal").collection("jobs");
    const jobApplyCollection = client
      .db("job-portal")
      .collection("applications");

    app.get("/jobs", async (req, res) => {
      const cursor = jobCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = { _id: new ObjectId(id) };
      const result = await jobCollection.findOne(cursor);
      res.send(result);
    });

    app.post("/jobApplication", async (req, res) => {
      const application = req.body;
      const result = await jobApplyCollection.insertOne(application);

      const id = application.job_Id;
      const query = { _id: new ObjectId(id) };
      const job = await jobCollection.findOne(query);
      let count = 0;
      if (job.applicationCount) {
        count = job.applicationCount + 1;
      } else {
        count = 1;
      }

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          applicationCount: count,
        },
      };

      const updateResult = await jobCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.get("/jobApplications", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { user_email: email };
      if(req.user.email !== email){
        return res.status(403).send("unauthorized access");
      }

      const result = await jobApplyCollection.find(query).toArray();

      for (const application of result) {
        const query = { _id: new ObjectId(application.job_Id) };
        const res = await jobCollection.findOne(query);
        if (res) {
          application.title = res.title;
          application.company = res.company;
          application.company_logo = res.company_logo;
        }
      }
      res.send(result);
    });

    app.post("/jobs", async (req, res) => {
      const application = req.body;
      const result = await jobCollection.insertOne(application);

      res.send(result);
    });

    app.get("/postedJobs", async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }
      const cursor = jobCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/jobApplication/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { job_Id: id };
      const result = await jobApplyCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "5h",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("job is falling from the sky");
});

app.listen(port, () => {
  console.log(`Job is waiting at:${port}`);
});
