import express from "express";
import https from "https";
import cors from "cors";
import { readFileSync } from "fs";
import github from "./routes/github.js";

// Configuration options for HTTPS server, specifying the SSL key and certificate files
const options = {
  // Reading the SSL private key file
  key: readFileSync("./certs/rootca.key"),
  // Reading the SSL certificate file
  cert: readFileSync("./certs/rootca.crt"),
};

const app = express();
const server = https.createServer(options, app);

// Use the CORS middleware
app.use(cors());
// Using JSON parsing middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use("/api/v1", github);

// Starting the HTTPS server to listen on port 8080
server.listen(8080, () => {
  console.log("Server is running on https://localhost:8080/");
});
