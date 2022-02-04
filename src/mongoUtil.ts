import mongoose from 'mongoose';
import { mongoAppName, mongoPassword, mongoURI, mongoUser } from '.';
import { usePromise } from './util';

export async function connectToMongo(): Promise<void> {
    const [mong, err] = await usePromise<typeof mongoose>(
        mongoose.connect(mongoURI, {
            appName: mongoAppName,
            dbName: mongoAppName,
            auth: { username: mongoUser, password: mongoPassword },
        })
    );

    if (mong) {
        console.log('Connected to mongo.');
    }

    if (err) {
        console.error('Error', err);
    }
}
