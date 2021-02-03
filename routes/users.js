import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`user dengan nama ${user.firstName} telah ditambah!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userDetail = users.find((user) => user.id === id);
  res.send(userDetail);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user dengan id ${id} deleted!`);
});

export default router;
