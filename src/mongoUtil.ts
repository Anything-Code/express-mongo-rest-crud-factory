import mongoose from 'mongoose';
import { mongoAppName, mongoPassword, mongoURI, mongoUser } from '.';

export function connectToMongo(): void {
    mongoose.connect(mongoURI, {
        appName: mongoAppName,
        dbName: mongoAppName,
        auth: { username: mongoUser, password: mongoPassword },
    });
}
