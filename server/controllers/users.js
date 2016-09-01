var mongoose = require('mongoose');
var User = mongoose.model('users');
var passport = require('passport');
//var bCrypt = require('bcrypt-nodejs');
var bcrypt = require('bcryptjs');

var secretPassword = function(password){
    var salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt);
}

var isvalidPassword = function(userPassword, databasePassword){
    return bcrypt.compareSync(userPassword, databasePassword);
}


module.exports = (function (){
  return {
    createUser: function (req, res){
      console.log("*@*@* Back-end controller -- users.js -- createUser ***");
      console.log('*@*@* req.body', req.body);
      console.log("password : secretPassword(req.body.password)",  secretPassword(req.body.password));

      User.findOne({email: req.body.email}, function (err, foundUser){
        if(foundUser){
          res.send({status:500, message: 'Sorry, the email has been used. Please use another email!', type:'internal'});
        }
        else{
          var user = new User({
            first_name: req.body.firstName,
            last_name : req.body.lastName,
            email : req.body.email,
            password : secretPassword(req.body.password)
          });

          user.save(function (err){
            if(err){
              console.log('*@*@* error ', err);
            }
            else {
                  console.log('save this user information', user);
                  req.session.userFirstName = user.first_name;
                  req.session.userLastName = user.last_name;
                  req.session.userId = user._id;
                  req.session.userEmail = user.email;
                  console.log('req.session', req.session);

                  res.send({status:201, isLoggedIn: true, authentication: true, type:'internal'});
            }
          });
        }
      });

    },
    userInformation: function (req, res){
      console.log("*@*@* Back-end controller -- users.js -- userInformation ***");
      console.log('req.session: ',req.session);
      User.find({_id:req.session.userId}, function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(users);
                }
            });
    },
    login: function (req, res){
      console.log("*@*@* Back-end controller -- users.js -- logIn ***");
      User.findOne({email: req.body.email}, function (err, user){
        var verifyPassword = req.body.password;
        if(!user){
          console.log(err);
          res.send({status:500, message: 'Sorry, the user account does not exist. Please check again!', type:'internal'});
        }
        else if(!isvalidPassword(req.body.password, user.password) ){
          console.log(err);
          // err = "Incorrect password. Please check again!";
          res.send({status:500, message: 'Invailid password. Please check again!', type:'internal'});
          // res.json(err);
        }
        else{

            if(isvalidPassword(req.body.password, user.password)){
                  console.log("user", user);
          //   // eddys work
          // if(req.body.password === user.password){
                req.session.userFirstName = user.first_name;
                req.session.userLastName = user.last_name;
                req.session.userId = user._id;
                req.session.userEmail = user.email;
                res.send({status:200, authentication: true, type:'internal'});
          }
        }
      });
    },
    logout: function (req, res){
      console.log("*@*@* Back-end controller -- users.js -- logout ***");
      console.log('*@*@* destroy the following session data \n', req.session);
      req.session.destroy();
      console.log('session data destroied -- session data: ', req.session);
      res.redirect('/');
    },
    searchName: function (req,res) {
      console.log("*@*@* Back-end controller -- users.js -- searchName ***");
      User.find({'first_name': {'$regex': req.body.name}}, function(err, users) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(users);
                }
            });


    }

  };
})();
