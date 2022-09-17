const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(8800, () => {
    console.log('Listening on port 8800');
});
