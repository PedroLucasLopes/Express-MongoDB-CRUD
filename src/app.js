import express from 'express';
import db from './config/dbConnect.js';
import routes from './Routes/index.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
}

// Connecting do MongoDB Database and returning a status for success or fail
db.on('error', console.log.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('DB Connection made with success');
})

// Calling Express and routes to point to our database
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

routes(app);

export default app;