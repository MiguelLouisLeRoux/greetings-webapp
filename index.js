const express = require('express');
const flash = require('express-flash');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const factoryLogic = require('./factory-logic');
const factory = factoryLogic();

app.listen(PORT, function() {});
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir:__dirname + '/views/layout'}));
app.set('view engine', 'handlebars');

app.use(session({
    secret : "Error Message String",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.get("/", function(req, res){ 
    req.flash('error', factory.values().theError);
    
    res.render('index', {
      title: 'Home',
      count: factory.values().counting,
      greeting: factory.values().theGreeting

    })
});

app.post('/name', function(req, res){
    factory.getName({
      theName: req.body.name
    });
     
    factory.radioCheck(req.body.radioGreet);
    
    res.redirect('/');
});

app.get('/clear', function (req, res) {
    req.flash('error', factory.values().cleared);
    factory.clearingButtonFactFunc();
    res.redirect('/');
});

app.get('/greetings', function(req, res){
    
    res.render('greetings', {
        names: factory.values().dynObj
    })
});

app.get('/counter', function(req, res){
    res.render('counter');
});

app.get('/counter/:person', function (req, res){
    const person = req.params.person;
    factory.partPerson(person);
    res.render('counter', {
        userName: factory.partPerson(person),
        count: factory.partPerson(person)
    });
    
});