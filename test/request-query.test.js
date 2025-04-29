import express from "express";
import  request  from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.send(`Hello ${req.query.firstName
    } ${req.query.lastName}`)
});

test("Test query param", async () => {
    const response = await request(app).
    get("/").query({firstName: "Abdul",
        lastName: "Charis"});
    expect(response.text).toBe("Hello Abdul Charis");
});
