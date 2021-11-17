const User = require('../models/user');
const bcrypt = require('bcrypt');
let password = "qazwsx";

exports.createAdmin = () => {
    User.findOne({role: "ADMIN"}, (err, admin) => {
        if(err) throw err
        if(admin) {
            return "admin account already exists"
        }
        User.create({
            email: "larspb1994@gmail.com",
            roles: "ADMIN"
        }, (err, user) => {
            if(err) throw err
            bcrypt.genSalt(10, (err, salt) => {
                if(err) throw err
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err
                    user.password = hash;
                    user.save((err, savedUser) => {
                        if (err) throw err
                        return "admin account created"
                    })
                })
            })
        })
    })
}