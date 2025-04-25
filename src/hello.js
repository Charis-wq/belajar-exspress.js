import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/charis", (req, res) => {
    res.send("Hello Charis")
});

app.listen(3100, () => {
    console.log("Server Started On Port 3100")
    //coba buka di localhost 3100

});
