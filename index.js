import express from 'express';
import ServerlessHttp from 'serverless-http';
import env from './config/env.js'
import helmet from 'helmet';
import { rateLimiterUsingThirdParty } from './middlewares/rateLimiter.js';
const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(helmet());


app.use(rateLimiterUsingThirdParty);

app.get('/health', (req, res) => {
    res.send('Hello World');
});

app.listen(env.PORT, () => {
    console.log('Server is running on port ', env.PORT);
});
export const Handler = ServerlessHttp(app)