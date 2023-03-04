import express from "express"
import cors from "cors"
import usersRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(cors())

app.use(express.json())
app.use("/users", usersRoutes)
app.use("/posts", postsRoutes)
app.use("/auth", authRoutes)

app.listen(8800, () => {
    console.log("Connected to backend")
})