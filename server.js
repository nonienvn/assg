const express = require("express")
const mongoose= require('mongoose');

const app = express();

const url = "mongodb://localhost/student"



mongoose.connect(url, {useNewUrlParser:true})
mongoose.connection.on('open', function() {
    console.log('connected')
})
app.use(express.json())


app.get('/', (req,res) =>{
    res.sendFile(__dirname+'/index.html');
})





const studentRouter = require("./routes/candidate")

const marksRouter = require("./routes/marks")

const avgRouter = require('./routes/agrregate')
const maxRouter = require('./routes/max')

app.use('/student', studentRouter)
app.use('/marks', marksRouter)
app.use('/avg',avgRouter)
app.use('/max',maxRouter)
app.listen(3000, () => {
    console.log("server started at http://localhost:3000")
})