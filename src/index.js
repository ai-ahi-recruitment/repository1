const express = require('express');
const bodyparser = require('body-parser');
const PORT=50005;
const db = require('./queries');

const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded(
    {
        extended:true,
    }
));

app.get('/',(req,res) => {
    res.json({message: "Hiiiiii"});
})
app.get('/users',db.getdet);
app.get('/users/:id', db.getdetById)
app.post('/users', db.createdet)
app.put('/users/:id', db.updatedet)
app.delete('/users/:id', db.deletedet)

app.listen(PORT, () => {
    console.log("listening to port :" + PORT);
})