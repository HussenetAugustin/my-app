//import library
const express = require('express');

const PORT = process.env.PORT || 80;

//create application
const app = express();

app.get('/',(req, res) => {
    res.json({message: 'coucou'});
});


app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.info('server started');
});