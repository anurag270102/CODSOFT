const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
//middleware
app.use(express.json());
app.use(cors());

// user: jainishrupala
// password : NKM1DnT7LU2hSlMm

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `${process.env.MONGO_URL}`;

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

    //creat db
    const db = client.db("mernJobPortal");
    const jobcollection = db.collection("demojobs");

    // post a job
    app.post("/post_job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      //console.log(body);
      const reuslt = await jobcollection.insertOne(body);
      if (reuslt.insertedId) {
        return res.status(200).send(reuslt);
      } else {
        return res.status(404).send({
          message: "can not insert! try again",
          status: false,
        });
      }
    });

    //get jobs by email
    app.get("/myjobs/:email", async (req, res) => {
      //console.log(req.params.email);
      const job = await jobcollection
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(job);
    });

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobcollection.find({}).toArray();
      res.send(jobs);
    });

    // get single job using id
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobcollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(job);
    });

    //update a jobs
    app.patch("/update-job/:id", async(req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set: {
          ...jobData
        },
      };
      const result = await jobcollection.updateOne(filter, updateDoc, options)
      res.send(result)
    })

    //delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobcollection.deleteOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Devloper!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
