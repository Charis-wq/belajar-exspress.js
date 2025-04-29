import express from "express";
import  request  from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
   res.json({
    path: req.path,
    originURL: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure

   })
});

test("Test URL Response", async () => {
    const response = await request(app).
    get("/hello/world").
    query({name: "Charis"});
    expect(response.body).toEqual({
        path: "/hello/world",
        originURL: "/hello/world?name=Charis",
        hostname: "127.0.0.1",
        protocol: "http",
        secure: false
    });
});