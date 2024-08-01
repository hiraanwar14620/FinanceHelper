import mongoose from 'mongoose';
import config from '../config.js';

async function main() {
	await mongoose.connect(`mongodb://${config.mongoServer}:${config.mongoPort}/${config.dbName}`);
}

main().catch(err => console.log(err));

export default mongoose;
