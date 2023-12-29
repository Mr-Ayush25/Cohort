// const app = require("./01-requestcount.js");
// const app = require("./02-ratelimitter.js");
const app = require("./03-errorcount.js");
// In Express Js every code block is a middleware in itself. Even the final endpoint such as get,post,put these are also thw middleware but they are just called in the End .
// 1) Every middleware has the access of four parameters (error,request,response,next) where next is used to call the next middleware afterwards.
// 2) "Use" it is also another way of writing a middleware.
// We will learn it while doing the assignments.
app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000/`);
});
