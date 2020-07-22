const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",require("./routes/Routes"))


app.listen(PORT,()=>{

    console.log(`SERVER RUNNING ON PORT ${PORT}`)

})


