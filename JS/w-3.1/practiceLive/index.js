const express = require("express");
const zod = require("zod");
const app = express();

// let count = 0;
// const counter = () => {
//   count++;
//   console.log(counter);
// };

// app.get("", (req, res) => {
//   res.send("<h2>Hello There</h2>");
// });
// 1)
// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "harkirat" || password != "pass") {
//     res.status(400).json({ msg: "Somethings up with your ionputs" });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: "Somethings up with your ionputs" });
//     return;
//   }
//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!",
//   });
// });

// 2)
// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;

//   res.send("You have" + kidneyLength + "kidneys");
// });

const schema = zod.array(zod.number());

app.post("/health-checkup", function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/");
});

// Notes
/*
1) app.use is also just a middelware that will run every single time behind the scene(BTS). ex:- express.json() is used to parse body.
2) why we use express.json() => cause we don't know what the body is going to be.
 */

// Learning Topic
/*
1) Global Catches
2) Zod (Schemas)
3) Hashing is one way
4) Encryption is two way
 */
