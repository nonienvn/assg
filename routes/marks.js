const express = require("express")

const router = express.Router()

const Mark = require('../models/test_marks')

router.get('/', async(req,res) => {

    try{
        const marks = await Mark.find()
        res.json(marks)
    }
    catch(err) {
        res.send('error')
    }
    
})

router.post('/', async(req,res) => {
    const mark= new Mark({
       name: req.body.name,
       test: req.body.test,
       marks: req.body.marks
    })
    try{
        const a1 = await mark.save()
        res.json(a1)
    }
    catch(err) {
        res.send('error' + err)
    }
    
})

module.exports = router;