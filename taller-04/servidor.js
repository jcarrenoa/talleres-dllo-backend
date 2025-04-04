import express from "express";
import userRoutes from "./routes/endpoints.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});