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

app.use(session({
    secret : "Error Message",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir:__dirname + '/views/layout'}));
app.set('view engine', 'handlebars'); 

app.get("/", function(req, res){ 
    req.flash('info', 'Welcome');
    res.render('index', {
      title: 'Home',
      count: factory.values().counting,
      greeting: factory.values().theGreeting

    })
});

app.get('/addFlash', function (req, res) {
    req.flash('info', factory.values().errorMes);
    res.redirect('/');
});

app.post('/name', function(req, res){
    factory.getName({
      theName: req.body.name
    });
    factory.radioCheck(req.body.radioGreet);
    
    res.redirect('/');
});