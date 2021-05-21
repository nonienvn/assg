const express = require("express")

const router = express.Router()

const Mark = require('../models/test_marks')

router.get('/', async(req,res) => {

    Mark.aggregate([
        { $group: {
            _id: '$test',
            markAvg: { $avg: '$marks'}
        }}
    ], function (err, results) {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
        }
    }
);
    
})







module.exports = router;