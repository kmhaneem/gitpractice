import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.json({ message: "Hello" });
});

app.listen(3000, () => {
  console.log("App is listening successfully");
});
