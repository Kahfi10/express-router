const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/theater', require('./routes/theater'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})