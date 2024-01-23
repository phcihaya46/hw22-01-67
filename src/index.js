require('dotenv').config()
const express = require("express")
const cors = require("cors")

const errorHandler = require("./middlewares/error")
const notFoundHandler = require("./middlewares/notFound")
const createError = require('./utils/createError')
const rounter = require('./rountes/auth-rountes')

const authRounte = require("./rountes/auth-rountes")
const productRoute = require("./rountes/product-route")

const app =express();

app.use(cors())
app.use(express.json())

app.use("/auth",authRounte)
app.use("/product",productRoute)



app.use(errorHandler)
app.use("*",notFoundHandler)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log("Server run on port"+" "+port)
})