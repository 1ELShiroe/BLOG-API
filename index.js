require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', routes)

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(console.log("DATABASE CONNECTED"))
    .catch((err) => {
        console.log('[DATABASE] ' + err)
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8081)