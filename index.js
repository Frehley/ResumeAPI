const express = require("express");
const app = express();
const product = require("./src/api/product");

app.use(express.json({ extended: false }));

app.use("api/product", product);

const PORT = process.env.PORT || 8080;
app.lister(PORT, () => console.log(`server is running in port ${ PORT }`));
