import express from "express";
import path from "path";

const staticFile = express.static(path.join(__dirname, "../../", "public"));

export default staticFile;
