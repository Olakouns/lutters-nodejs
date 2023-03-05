// const express = require('express');
// const Apprenant = require('./modele')

// const app = express();
// const mongoose = require('mongoose');

// app.get('/', (req, res) => {
//     res.send('Welcome')
// })

// mongoose
//     // .connect("mongodb://lazare:mot2P@ss@cluster0.xymug.mongodb.net/?retryWrites=true&w=majority")
//     .connect("mongodb://127.0.0.1:27017/aprenant_db")
//     .then((cnx) => {
//         console.log(`Database connected : ${cnx.connection.host}`)
//     })

// app.get('/classes/:nomClasse', (req, res) => {
//     res.send('Bienvenu ' + req.params.nomClasse);
// })

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json({extended: false}));

// app.use(express.static("public"));


// app.post('/apprenants', (req, res) => {
//     let apprenant = new Apprenant(req.body)

    // apprenant.save(err => {
    //     if (err) return res.send(err);
    //     res.send(apprenant)
    // })
//     // res.send(req.body.nom+ ' a une moyenne de ' + req.body.moyenne + ' points');
// });


// app.patch('/apprenants/:id', (req, res) => {
    // Apprenant.findByIdAndUpdate(
    //     req.params.id,
    //     req.body,
    //     {new : true},
    //     (err, updatedApprenants) => {
    //         if (err) return res.send(err);
    //         res.send(updatedApprenants);
    //     }
    // )
// })

// const LoggerMiddleware = (req, res, next) => {
//     console.log(`Logged in ${req.url} ${req.method} -- ${new Date()}`);
//     next();
// }





// app.use(LoggerMiddleware)

// app.listen(3000, function(){
//     console.log("Server is running and listening in port 4000: http://localhost:3000");
// });

const express = require('express');
var indexRouter = require("./routes/index");
var indexMiddleware = require("./middleware/index");
var lutterRouter = require("./routes/lutteurs-route");
const db = require('./config/db');
var path = require('path');

const app = express();

db.connectDb();

app.set('views', path.join(__dirname, './views'))
// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile)

app.use(express.urlencoded({ extended: false }));
app.use(express.json({extended: false}));

app.engine('html', require('ejs').renderFile)

app.use(express.static("public"));

// app.use(indexMiddleware);
app.use("/", indexRouter);
app.use("/lutters", lutterRouter);

app.listen(3000, function(){
    console.log("Server is running and listening in port 4000: http://localhost:3000");
});
