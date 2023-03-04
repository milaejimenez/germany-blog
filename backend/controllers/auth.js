import { db } from "../db.js"
import bcrypt from "bcryptjs"


export const register = (req, res) => {
    // Check if user already exists
    const q = "SELECT * FROM users WHERE username = ? OR email = ?"
    db.query(q, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("This user already exists")

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        // Insert user
        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)"
        const values = [req.body.username, req.body.email, hash]
        db.query(q, values, (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json("User has been created")
        })
    })
    const users = db.query("SELECT * FROM users")
console.log(users)
}

export const login = (req, res) => {
    res.json("from controller")
}

export const logout = (req, res) => {
    res.json("from controller")
}