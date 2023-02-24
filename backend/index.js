import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"auto0634",
    database:"germany-blog",
})


app.get("/", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend")
})