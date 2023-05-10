const express = require("express");

const Pizza = require("./models/pizzaModel")

const db = require("./db");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥" + port);
});

// DEPRECATED
// app.get("/getpizzas", (req, res) => {

//     Pizza.find({}, (err, docs) => {
//         if(err){
//             console.log(err);
//         }
//         else {
//             res.send(docs)
//         }
//     })
// })

app.get("/getpizzas", async (req, res) => {
    try {
      const docs = await Pizza.find({});
      res.send(docs);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
