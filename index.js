const express = require('express');
const app = express()
const port = 5000

// mongodb server start
// name : collage-student
// pass : iGCUSzxLaup211KI

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://collage-student:iGCUSzxLaup211KI@cluster0.w4v9v80.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    const studentCollection = client.db("student").collection("allStudentData")

    try {
        app.get("/user", (req, res) => {
            const query = {}
            const result = studentCollection.find(query)
            res.send(result)
        })
    }
    finally { }
}
run().catch(e => console.log(e))


app.get("/", (req, res) => {
    res.send("server is running")
})

app.listen(port, () => {
    console.log(`server running port is ${port}`)
})