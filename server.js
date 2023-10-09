const express = require("express")
require("./app/config/dbConfig").getDbConnection()

const publicRoutes = require("./app/routes/publicRoutes")
const authMiddlerware = require("./app/middleware/auth.middleware")
const categoryRoutes = require("./app/routes/categoryRoutes")
const app = express()

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/admin",categoryRoutes)

app.use("/public",publicRoutes)
app.listen(9990)
console.log("server started 9990");