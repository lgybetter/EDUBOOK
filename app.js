import express from 'express';
import routes from './routes/index';
import http from 'http';
import path from 'path';
import config from './config';

const app = express();
const router = express.Router();

app.set('port', process.env.PORT || config.app.port);
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

http.createServer(app).listen(config.app.port, () => {
  console.log('listen at port: ' + config.app.port);
})
