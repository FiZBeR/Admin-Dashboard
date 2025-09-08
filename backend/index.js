import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.route.js";
import generalRoutes from "./routes/general.route.js";
import managementRoutes from "./routes/management.route.js";
import salesRoutes from "./routes/sales.route.js";

/* DATA IMPORT */
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import ProductStat from "./models/productStat.model.js";
import Transaction from "./models/transaction.model.js";
import OverallStat from "./models/overallStat.model.js"
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat } from "./data/index.js"

/* CONEXCION CON LA BASE DE DATOS */
import conection from "./data/conection.js"
conection();

/* CCONFIGURACION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE */
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: " + PORT);
});


