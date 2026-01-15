const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false
}));
require("dotenv").config();
app.set('view engine', 'ejs'); 
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
app.get('/register', (req, res) => {
    res.render('register');
});

const db = require("./db/connection");

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const messagesRoutes = require("./routes/messages.routes");
app.use("/", messagesRoutes);





app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
