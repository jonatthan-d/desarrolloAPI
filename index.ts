var express = require('express');
import router from './src/routes';

var app = express();

const PUERTO = 9000;

const initialize = () => {
	console.log(`Server is running on port ${PUERTO}`);
}

router(app);

app.listen(PUERTO, initialize);