import express from "express";
import  request  from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
});

test("test from request express hello", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World");
});
