const express = require("express");
const router = express.Router();
const connection = require("../config");

// ajout d"une donnée
router.post("/", (req, res) => {
  const data = req.body;

  connection.query("INSERT INTO travel SET ?", data, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// récupération de liste
router.get("/", (req, res) => {
  connection.query("SELECT * FROM travel", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// récupération d"une donnée
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query(
    "SELECT * FROM travel WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(results);
      }
    }
  );
});

// modification d"une donnée
router.put("/:id", (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query(
    "UPDATE travel SET ? WHERE id = ?",
    [data, idParams],
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// suppression d"une donnée
router.delete("/:id", (req, res) => {
  const idParams = req.params.id;

  connection.query(
    "DELETE FROM travel WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// recupération liste de pictures par rapport à une travel
router.get("/:id/pictures", (req, res) => {
  const id = req.params.id;

  connection.query(
    "SELECT * FROM picture WHERE id_travel = ? ",
    id,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

// recupération de l'travel lier à la reservation
router.get("/:id/reservations", (req, res) => {
  const id = req.params.id;

  connection.query(
    "SELECT * FROM reservation as r JOIN travel as a ON a.id = r.id_travel WHERE a.id = ? ",
    id,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

// recupération de la keyword lier au travel
router.get("/:id/keywords", (req, res) => {
  const id = req.params.id;

  connection.query(
    "SELECT tk.id_keyword FROM travel_keyword as tk JOIN travel as t ON t.id = tk.id_travel JOIN keyword as k ON k.id = tk.id_keyword WHERE tk.id_travel = ? ",
    id,
    (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
