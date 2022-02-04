import dotenv from 'dotenv';
import { connectToMongo } from './mongoUtil';
import express from 'express';
import bodyParser from 'body-parser';
import crudFactory from './crudFactory';
import Order from './schemas/Order';
import User from './schemas/User';

dotenv.config();

export const mongoURI = process.env.MONGO_URI || 'uri';
export const mongoAppName = process.env.MONGO_APP_NAME || 'app-name';
export const mongoUser = process.env.MONGO_USER || 'user';
export const mongoPassword = process.env.MONGO_PASSWORD || 'password';
export const port = process.env.PORT || 1234;

connectToMongo();
const app = express();

app.use(bodyParser.json());

app.use('/api/order', crudFactory<typeof Order>(Order));
app.use('/api/user', crudFactory<typeof User>(User));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
