var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    bp       = require('body-parser'),
    app      = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



app.use( express.static( path.join( root, 'client' )));
app.use(express.static(path.join(__dirname, '/client/css')));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())


app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var users = require('./server/models/user.js');
passport.use(new LocalStrategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());


require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( 'server running on port ${ port }' );
});
