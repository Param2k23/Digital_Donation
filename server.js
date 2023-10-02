const express = require("express")
require("./app/config/dbConfig").getDbConnection()

const publicRoutes = require("./app/routes/publicRoutes")
const authMiddlerware = require("./app/middleware/auth.middleware")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/public",publicRoutes)
app.listen(9990)
console.log("server started 9990");