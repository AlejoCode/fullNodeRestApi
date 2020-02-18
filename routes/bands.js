const express = require ('express');
const router = express.Router();
const BandModel = require('../models/Band')

// -> POST , CREATE
router.post('/bands', (req, res, next) => {
    console.log("req.body");
    console.log(req.body);

    BandModel.create(req.body).then((band)=>{
        res.send(band);
    }).catch(next);
});

// -> GET / READ
router.get('/bands', (req, res, next) => {
    BandModel.find({}).then((bands) => {
        res.send(bands);
    }).catch(next);
});

// -> PUT / UPDATE
router.put('/bands/:id', (req, res, next) => {
    BandModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        BandModel.findOne({_id: req.params.id}).then((band) => {
            res.send(band);
        })
    }).catch(next);
});


// -> DELETE 
router.delete('/bands/:id', (req, res, next) => {
    BandModel.findOneAndRemove({_id: req.params.id}).then((band) => {
        res.send(band);
    }).catch(next);
})

module.exports = router;