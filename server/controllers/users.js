var mongoose = require('mongoose');
var User = mongoose.model('users');
var passport = require('passport');

module.exports = (function (){
  return {
    createUser: function (req, res){
      console.log("*@*@* Back-end controller -- users.js -- createUser ***");
      console.log('*@*@* req.body', req.body);
      var bcryptPassword = req.body.password;
      console.log('bcryptPassword', bcryptPassword);
      var user = new User();
        user.first_name = req.body.firstName;
        user.last_name = req.body.lastName;
        user.email = req.body.email;
        user.password = user.generateHash(bcryptPassword);


      user.save(function (err){
        if(err){
          console.log('*@*@* error ', err);
        }
        else {
              req.session.userFirstName = user.first_name;
              req.session.userLastName = user.last_name;
              req.session.userId = user._id;
              req.session.userEmail = user.email;
              console.log('req.session', req.session);
              console.log('redirect to this URL', '/#/wall/'+ req.session.userId );
              res.send({status:201, isLoggedIn: true, type:'internal'});
            //   passport.authenticate('local')(req, res, function(){
            //     console.log(' $$$$$$$$$  passport.authenticate');
            //     res.redirect('/#/wall');
            // });
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
        else if(!user.validPassword(verifyPassword) ){
          console.log(err);
          // err = "Incorrect password. Please check again!";
          res.send({status:500, message: 'Invailid password. Please check again!', type:'internal'});
          // res.json(err);
        }
        else{
          if(user.validPassword(verifyPassword) ){
            req.session.userFirstName = user.first_name;
            req.session.userLastName = user.last_name;
            req.session.userId = user._id;
            req.session.userEmail = user.email;
            res.send({status:201, isLoggedIn: true, type:'internal'});
            // res.redirect('/#/wall');
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
    }
  };
})();
