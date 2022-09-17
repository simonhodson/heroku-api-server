const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 80

const app = express();
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});
