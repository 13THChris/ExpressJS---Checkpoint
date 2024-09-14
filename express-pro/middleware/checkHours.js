// middleware/checkHours.js
function checkWorkingHours(req, res, next) {
  const now = new Date();
  const day = now.getDay(); // 0: dimanche, 1: lundi, ..., 6: samedi
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Continue si dans les heures de travail
  } else {
    res.send(
      "L'application est disponible uniquement du lundi au vendredi, de 9h à 17h."
    );
  }
}

module.exports = checkWorkingHours;
