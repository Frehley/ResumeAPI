const express = require("express");
const app = express();
const product = require("./api/product");
const resume = require("./api/resumeData");

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/resume", resume);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${ PORT }`));