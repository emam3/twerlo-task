import dotenv from 'dotenv';
import app from './src/app';

dotenv.config()

app.listen(process.env.PORT, () => { `listening on port ${process.env.PORT}` })