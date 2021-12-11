const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Puerto
const PORT =    process.env.PORT || 3000;

//Routes
app.use(require('./routes/index'));

app.listen(PORT);
console.log('Server on port 3000');