const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// GET - afficher la page articles
router.get("/articles", (req, res) => {

    if (!req.session.user) {
        return res.redirect("/login");
    }

    db.query(
        `SELECT m.content, u.username
         FROM message m
         JOIN user u ON m.id_user = u.id_user
         ORDER BY m.id_message DESC`,
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erreur serveur");
            }

            res.render("articles", {
                messages: results,
                user: req.session.user
            });
        }
    );
});

// POST - créer un message
router.post("/messages", (req, res) => {
    console.log("Session user :", req.session.user);
    if (!req.session.user) {
        return res.redirect("/login");
    }

    const content = req.body.content;
    const userId = req.session.user.id;

    if (!content) {
        return res.status(400).send("Message vide");
    }

    db.query(
        "INSERT INTO message (id_user, content) VALUES (?, ?)",
        [userId, content],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erreur serveur");
            }

            res.redirect("/articles");
        }
    );
});

module.exports = router;
