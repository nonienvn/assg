const express = require("express")

const router = express.Router()

const Mark = require('../models/test_marks')

router.get('/', async(req,res) => {

 

router.get('/', async(req,res) => {

    Mark.aggregate(
        { $group: { _id: "$name", maxAge: { $max: '$marks' }}}
      , { $project: { _id: 0, maxMarks: 1 }}
      , function (err, res) {
      if (err) return handleError(err);
      console.log(res); 
    });
    
    
})








    
})







module.exports = router;