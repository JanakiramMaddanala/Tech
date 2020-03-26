import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(router);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});