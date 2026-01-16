# Potatao

Potatao est un site communautaire dédié aux **fans de  tubercule**  
Les utilisateurs peuvent lire, écrire et commenter des avis, recettes, anecdotes ou débats autour de la patate sous toutes ses formes : frites, purée, gratin, raclette (évidemment).

---

## Fonctionnalités

-  Publication de commentaires sur la pomme de terre
-  Système d’utilisateurs (inscription / connexion)
-  Stockage des données avec **MySQL**
-  Rendu dynamique des pages avec **EJS**
-  Affichage chronologique des commentaires


---

## Technologies utilisées

- **Node.js**
- **Express.js**
- **EJS** 
- **MySQL**
- **HTML / CSS**

---

## 📦 Prérequis

- Node.js (v16+ recommandé)
- MySQL
- npm 

---

## ⚙️ Installation

1. **Cloner le projet**
```bash
git clone https://github.com/Escobar59/Potatao.git
cd Potatao
```
Ou depuis GitHub Desktop, ```Add > Clone Repository > URL``` et collez l'URL ci-dessus.

2. **Installer et remplir la base de données**
Dans un terminal MySQL, créez la base de données 
```sql
CREATE DATABASE potatao;
\u potatao
```
Puis copiez/collez l'entièreté du fichier ```potatao.sql```
Ensuite, modifiez le fichier ```.env``` pour votre utilisateur mysql et son mot de passe.

3. **Lancer le site**
Dans un terminal node, à la racine du projet, lancez ```node app.js```
Allez sur l'URL générée, vous pouvez maintenant vous crééer un utilisateur, vous connecter, et utiliser le site!