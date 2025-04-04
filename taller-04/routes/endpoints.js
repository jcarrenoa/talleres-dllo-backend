import express from "express";
const router = express.Router();

let usuarios = [
  {
    codigo: "1001",
    nombre: "Laura",
    apellido: "Gomez",
    hobbies: ["leer", "pintar", "bailar"]
  },
  {
    codigo: "1002",
    nombre: "Carlos",
    apellido: "Martínez",
    hobbies: ["futbol", "cine"]
  },
  {
    codigo: "1003",
    nombre: "Ana",
    apellido: "Ruiz",
    hobbies: ["nadar"]
  }
];

// GET
// Query params: ?nombre=HOBBY
router.get("/hobby", (req, res) => {
  const hobby = req.query.nombre;
  const filtrados = usuarios.filter(u => u.hobbies.includes(hobby));
  res.json(filtrados);
});

// GET
// Query params: ?codigo=CODIGO
router.get("/exists", (req, res) => {
  const codigo = req.query.codigo;
  const existe = usuarios.some(u => u.codigo === codigo);
  res.json({ existe });
});

// GET
// Query params: ?nombre=HOBBY
router.get("/hobby/count", (req, res) => {
  const hobby = req.query.nombre;
  const cantidad = usuarios.filter(u => u.hobbies.includes(hobby)).length;
  res.json({ cantidad });
});

// GET
router.get("/is-free", (req, res) => {
  const libres = usuarios.filter(u => u.hobbies.length < 3);
  res.json(libres);
});

// POST
router.post("/suggest", (req, res) => {
  const { codigo, hobby } = req.body;
  const usuario = usuarios.find(u => u.codigo === codigo);

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  if (usuario.hobbies.length >= 3) {
    return res.status(400).json({ mensaje: "El usuario ya tiene 3 hobbies" });
  }

  usuario.hobbies.push(hobby);
  res.json({ mensaje: "Hobby agregado", usuario });
});

// POST
router.post("/", (req, res) => {
  const nuevo = req.body;

  if (!nuevo.codigo || !nuevo.nombre || !nuevo.apellido || !Array.isArray(nuevo.hobbies)) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  if (nuevo.hobbies.length < 2) {
    return res.status(400).json({ mensaje: "Debe tener al menos dos hobbies" });
  }

  if (usuarios.some(u => u.codigo === nuevo.codigo)) {
    return res.status(400).json({ mensaje: "El usuario ya existe" });
  }

  usuarios.push(nuevo);
  res.json({ mensaje: "Usuario registrado exitosamente", usuario: nuevo });
});

export default router;