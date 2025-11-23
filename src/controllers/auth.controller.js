import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { creatUser, findUserByEmail } from "../models/user.js";

export const registrer = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "email y contraseña requeridos" });
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(409).json({ message: `El usuario ${email} ya existe` });
  }
  const passwordHash = await bcrypt.hash(password, 10);

  //   console.log(email, password); verifico que recibo

  const user = await creatUser(email, passwordHash);
  if (!user) {
    return res.sendStatus(503);
  }
  res.status(201).json({ id: user.id, email: user.email });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "Email y contraseña requeridos" });
  }

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Credenciales Inválidas" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    process.env.JWT_SECRET,
    {
      expiresIn: "1h", 
    }
  );
  return res.json({ token }); 
};
//payload carga util del token se ponen datos que no son sensibles id o email o uuid
// es una firma que usamos para fimrar el token 
//fecha de expiración lo que necesito que dure el token, depende de la app hs minutos dias semanas
//devuelve eltoken que uso para crear un producto
