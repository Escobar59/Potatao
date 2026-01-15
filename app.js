const express = require("express");
const app = express();
app.set('view engine', 'ejs');      // 👈 TRÈS IMPORTANT
app.set('views', './views');    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/articles', (req, res) => {
    res.render('articles');
});




app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
