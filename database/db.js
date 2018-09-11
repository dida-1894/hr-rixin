var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/hr_app_node');

db.connection.on('error', function(error) {
    console.log("connect mongodb fail : " + error);
});

db.connection.on("open", function() {
    console.log("connect to mongodb success");
});

var signupSchema = new mongoose.Schema({
    name: { type: String },
    telephone: { type: String },
    depart: { type: String },
    center: { type: String },
    part: { type: String }
});

var signupModel = mongoose.model('signup', signupSchema);

exports.signupModel = signupModel;