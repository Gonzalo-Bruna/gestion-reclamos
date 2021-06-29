import mongoose, { ConnectionOptions } from 'mongoose';

function connect(): Promise<typeof mongoose> {

    const mongoUri = "mongodb+srv://admin:admin@cluster0.06qcc.mongodb.net";
    const nameDatabase = 'dev-reclamos';
    
    const mongooseOptions: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    
    return mongoose.connect(`${mongoUri}/${nameDatabase}`, mongooseOptions);
}

export default { connect }

