// routes/auth.routes.js
const express = require("express");
const router = express.Router();  // <-- IMPORTANT : créer le router
const db = require("../db/connection");

// Route POST pour inscription
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {

        db.query(
            "INSERT INTO user (username, password) VALUES (?, ?)",
            [username, password],
            (err, result) => {
                if (err) {
                    if (err.code === "ER_DUP_ENTRY") {
                        return res.send("Nom d'utilisateur déjà pris");
                    }
                    throw err;
                }
                res.redirect("/login?success=1");
            }
        );
    } catch (err) {
        console.error(err);
        res.send("Erreur serveur");
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.send("Merci de remplir tous les champs");
    }

    // Vérifier si l'utilisateur existe
    db.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        async (err, results) => {
            if (err) throw err;

            if (results.length === 0) {
                return res.send("Nom d'utilisateur ou mot de passe incorrect");
            }

            const user = results[0];

            // Comparer le mot de passe avec bcrypt
            const match = password === user.password;
            if (!match) {
                return res.send("Nom d'utilisateur ou mot de passe incorrect");
            }

            req.session.user = {
                id: user.id_user,
                username: user.username
            };

            // 🔹 Connexion réussie
            // Pour l'instant, on peut juste rediriger vers une "page d'accueil"
            res.redirect("/articles"); 
        }
    );
});

// GET /logout
router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur lors de la déconnexion");
        }
        // Redirige vers la page d'accueil ou login
        res.redirect("/login");
    });
});



module.exports = router;  // <-- ne pas oublier d'exporter
