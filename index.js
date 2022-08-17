const express = require("express");
const app = express();
const data = require("./api/resume");

app.use(express.json({ extended: false }));

app.use("/api/resume", data);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${ PORT }`));