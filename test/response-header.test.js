import express from "express";
import  request  from "supertest";

const app = express();

app.get("/", (req, res) => {
    res.set({
        "powerdBy": "Abdul Charis",
        "author": "Charis"
    })
    res.send("Hello Response")
});

test("Test Response Header", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Response")
    expect(response.get("powerdBy")).toBe("Abdul Charis")
    expect(response.get("author")).toBe("Charis");
});
