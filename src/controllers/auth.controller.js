import bcrypt from "bcrypt";
import { creatUser, findUserByEmail } from "../models/user.js";

export const registrer = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "email y contraseña requeridos" });
  }

  const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({message: `El usuario ${email} ya existe`})
  }
  const passwordHash = await bcrypt.hash(password, 10);

  //   console.log(email, password); verifico que recibo

  const user = await creatUser(email, passwordHash);
  if (!user) {
    return res.sendStatus(503);
  }
  res.status(201).json({ id: user.id, email: user.email });
};
