const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const factoryLogic = require('./factory-logic');
const factory = factoryLogic();

app.listen(PORT, function() {});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')