var express = require('express');
var router = express.Router();
var signupModel = require('../database/db').signupModel;


router.get('/', function(req, res, next) {

    signupModel.find(function(error, doc) {
        if (error) {
            console.log("mongodb find error : " + error);
            var data = {
                "data": "there stand some wrong , so no data"
            };

            res.render('signup', { info: JSON.stringify(data) });
        } else {
            var data = {
                "data": doc
            };
            console.log(data.data.length)
            res.render('signup', { info: JSON.stringify(data) });
        }
    })
});

router.post('/', function(req, res, next) {
    var query = {
        name: req.body.slide_name,
        telephone: req.body.slide_telephone,
        depart: req.body.slide_depart,
        center: req.body.slide_center,
        part: req.body.slide_part
    };

    signupModel.findOne({ "telephone": query.telephone }, function(error, doc) {
        if (error) {
            console.log("mongodb findOne error : " + error);
        }

        if (doc) {
            if (doc.center !== query.center) {
                var signupEntity = new signupModel({
                    name: query.name,
                    telephone: query.telephone,
                    depart: query.depart,
                    center: query.center,
                    part: query.part
                });

                signupEntity.save(function(error, doc) {
                    if (error) {
                        console.log("mongodb save error : " + error);
                    } else {
                        console.log(doc);
                    }
                })
            }
        } else {
            var signupEntity = new signupModel({
                name: query.name,
                telephone: query.telephone,
                depart: query.depart,
                center: query.center,
                part: query.part
            });

            signupEntity.save(function(error, doc) {
                if (error) {
                    console.log("mongodb save error : " + error);
                } else {
                    console.log(doc);
                }
            })
        }
    })

    if (query.center == "技术研发中心") {
        res.redirect('/scan');
    } else {
        res.redirect('/');
    }
});

module.exports = router;