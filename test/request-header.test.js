import express from "express";
import  request  from "supertest";

const app = express();

app.get("/", (req, res) => {
    const type = req.get("Accept")
    res.send(`Hello ${type}`)
});

test("test HTTP header", async () => {
    const response = await request(app).get("/").set("Accept", "application/json");
    expect(response.text).toBe("Hello application/json");
});
