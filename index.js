const express = require('express');
const app = express();

// body json
app.use(express.json());

// prort
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//test App
app.get('/test', (req, res) => {
  res.send('nodejs-elearning')
})