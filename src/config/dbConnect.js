import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://pdro_lopes:Pedro1999@pricemet-test.whbtdiq.mongodb.net/pricemet-test?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;