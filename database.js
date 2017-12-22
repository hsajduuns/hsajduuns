var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://"+process.env.HOST+":"+process.env.PORT+"/"+process.env.DB, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao BANCO DE DADOS!");
})

var User = new Schema({
    _id: {
        type: String
    },
    premium: {
        type: Boolean,
        default: false
    }
})

var Users = mongoose.model("Users", User);

exports.Users = Users
