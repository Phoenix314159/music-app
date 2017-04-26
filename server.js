const express = require('express')
    , bodyParser = require('body-parser')
    , port = 3045
    , app = module.exports = express()
    , mainCtrl = require('./mainCtrl')
    , cors = require('cors')
    , passport = require('passport')
    , session = module.exports = require('express-session')
    , config = require('./.config');

let corsOptions = {
    origin: 'http://localhost:3045'
}
app.use(session({ secret: config.sessionSecret }))
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/api/login', mainCtrl.login);
app.post('/api/addnewuser', mainCtrl.addNewUser);
app.post('/api/addtrack', mainCtrl.addTrack);
app.post('/api/addeffect', mainCtrl.addEffect);
app.get('/api/geteffect', mainCtrl.getEffect);
app.get('api/viktor', mainCtrl.getViktor)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
