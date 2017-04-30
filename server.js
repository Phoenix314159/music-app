const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3055
    , path = require('path')
    , cookieParser = require('cookie-parser')
    , exphbs = require('express-handlebars')
    , expressValidator = require('express-validator')
    , flash = require('connect-flash')
    , LocalStrategy = require('passport-local').Strategy
    , app = module.exports = express()
    , mainCtrl = require('./mainCtrl')
    , cors = require('cors')
    , passport = require('passport')
    , session = module.exports = require('express-session')
    , config = require('./.config');

let corsOptions = {
    origin: 'http://localhost:3055'
}

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.post('/api/login', mainCtrl.login);
app.post('/api/addnewuser', mainCtrl.addNewUser);
app.post('/api/addtrack', mainCtrl.addTrack);
app.post('/api/addeffect', mainCtrl.addEffect);
app.get('/api/geteffect', mainCtrl.getEffect);
app.get('/api/viktor', mainCtrl.getViktor);
// app.get('/api/daw', mainCtrl.getDaw);
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
