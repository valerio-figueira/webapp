const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const path = require('path');

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/webapp', (req, res) => {
    res.render('index')
});


app.listen(3000, () => {
    console.log("Server running")
});