const express = require('express')
const bodyParser = require('body-parser')

const port = 3000;

const app = express();

app.use(express.static(__dirname + '/../public/build'));

app.use(json());

app.get
app.
app.




app.listen( port,() => {console.log(`Server listening on port ${port}`); } );