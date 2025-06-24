import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from "./app/routes";

dotenv.config();
const app: Application = express();

app.use(cors());
app.use(express.json());

// All the API-endpoints 
app.use(routes);

// base route
app.get('/', (req: Request, res:Response) => {
    res.send('Welcome to Library Management server!');
});

 // error-handler for if no route is found 
app.use((req: Request, res: Response) => {
    res.status(404).send({
        success: false,
        message: "Route not found!"
    })
});

export default app;