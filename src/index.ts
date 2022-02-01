import dotenv from 'dotenv';
import { connectToMongo } from './mongoUtil';
import Announcement from './schemas/Announcement';
import express from 'express';
import bodyParser from 'body-parser';
import crudFactory from './crudFactory';

dotenv.config();

export const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017';
export const mongoAppName = process.env.MONGO_APP_NAME || 'mongo-api';
export const mongoUser = process.env.MONGO_USER || 'root';
export const mongoPassword = process.env.MONGO_PASSWORD || 'password';
export const port = process.env.PORT || 4000;

connectToMongo();
const app = express();

app.use(bodyParser.json());

app.use('/api/announcement', crudFactory<typeof Announcement>(Announcement));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
