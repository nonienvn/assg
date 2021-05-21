const express = require("express")

const router = express.Router()

const Candidate = require('../models/candidate')

router.get('/', async(req,res) => {

    try{
        const students = await Candidate.find()
        res.json(condidates)
    }
    catch(err) {
        res.send('error')
    }
    
})

router.post('/', async(req,res) => {
    const candidate= new Candidate({
       name: req.body.name,
       email: req.body.email
    })
    try{
        const a1 = await candidate.save()
        res.json(a1)
    }
    catch(err) {
        res.send('error' + err)
    }
    
})

module.exports = router;