const express = require('express');
const cors = require('cors')
const os = require('os');
const transactions = require('./routes/transactions');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.use('/api/v1/transactions', transactions);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
