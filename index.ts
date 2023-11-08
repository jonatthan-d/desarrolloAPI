const express = require('express');
import routes from "./src/network";

var app = express();
routes(app)

const example = function() {
	console.log("estoy a la escucha")
}

app.listen(
	9000,
	example
)