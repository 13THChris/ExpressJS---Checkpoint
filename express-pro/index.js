// app.js
const express = require("express");
const path = require("path");
const app = express();
const checkWorkingHours = require("./middleware/checkHours");

// Middleware pour vérifier les heures de travail
app.use(checkWorkingHours);

// Définir le moteur de template Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Servir les fichiers CSS
app.use(express.static(path.join(__dirname, "public")));

// Routes pour les pages
app.get("/accueil", (req, res) => {
  res.render("accueil");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
