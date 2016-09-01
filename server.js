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
var s3 = require('s3');
var secret = require('./secret.js'); 
var multer = require('multer')

app.use( express.static( path.join( root, 'client' )));
app.use(express.static(path.join(__dirname, '/client/css')));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

app.use(function(req, res, next) { 
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// passport config
// var users = require('./server/models/user.js');
// passport.use(new LocalStrategy(users.authenticate()));
// passport.serializeUser(users.serializeUser());
// passport.deserializeUser(users.deserializeUser());

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

 

app.post('/upload', function(req, res) {
	console.log('at the route to upload photos to s3')
    upload(req,res,function(err){
    	console.log(req.body); 
        if(err){
        	console.log('error', err);
             res.json({error_code:1,err_desc:err});
             return;
        }
        //

        var params = {
            localFile: req.file.path,
            s3Params: {
                Bucket: "siliconvalleyfaces",
                Key: "photos/"+req.file.originalname 
            },
        };
        var uploader = client.uploadFile(params);
        uploader.on('error', function(err) {
            console.error("unable to upload:", err.stack);
        });
        uploader.on('progress', function() {
            console.log("progress", uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
        });
        uploader.on('end', function() {
            console.log("done uploading");
        });
        //
        res.json({error_code:0,err_desc:null});
    });
});
var client = s3.createClient({
	maxAsyncS3: 20,     // this is the default 
	s3RetryCount: 3,    // this is the default 
	s3RetryDelay: 1000, // this is the default 
	multipartUploadThreshold: 20971520, // this is the default (20 MB) 
	multipartUploadSize: 15728640, // this is the default (15 MB) 
	s3Options: {
	accessKeyId: secret.accessKeyId(),
	secretAccessKey: secret.secretAccessKey(),
	},
});

require('./server/config/db.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( 'server running on port ${ port }' );
});
