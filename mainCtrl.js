const app = require('./server')
    , massive = require('massive')
    , connString = "postgres://postgres:name@localhost/loginApp"
    , massiveInstance = massive.connectSync({connectionString: connString})
    , session = require('./server');
    // , viktor = require('./viktor');

app.set('db', massiveInstance);
const db = app.get('db');


module.exports = {
    login : function (req, res) {
        // for(let i=0; i<users.length; i++){
        //     if(req.body.name === users[i].name && req.body.password === users[i].password){
        //         req.session.currentUser = users[i];
        //         return res.status(200).send({userFound:true});
        //     }else{
        //         return res.status(200).send({userFound: false});
        //     }
        // }
        res.send(console.log('hello'));
    },
    addNewUser: (req, res) => {
        db.add_new_user([req.body.firstname, req.body.lastname, req.body.avatar, req.body.username, req.body.password],
            (err, newUser) => {
                !err ? res.status(200).send(newUser) : res.status(404).send(err);

            })
    },
    addTrack: (req, res) => {
        db.add_track([req.body.track], (err, track) => {
            !err ? res.status(200).json(track) : res.status(404).send(err);
        })
    },
    addEffect: (req, res) => {
        db.add_effect([req.body.effect], (err, effect) => {
            !err ? res.status(200).json(effect) : res.status(404).send(err);
        })
    },
    getEffect: (req, res) => {
        db.get_effect([req.body.effect], (err, effect) => {
            !err ? res.status(200).json(effect) : res.status(404).send(err);
        })
    },
    // getViktor: (req, res) => {
    //     console.log('yo dude');
    //     res.status(200).send(viktor);
    // }
}
