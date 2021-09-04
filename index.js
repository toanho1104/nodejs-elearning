const express = require('express');
// const { userRoute } = require('./routers/account.routers');
const rootRouter = require('./routers/root.routers');
const app = express();

// body json
app.use(express.json());

// api url
app.use('/api', rootRouter)

// prort
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

//test App
app.get('/test', (req, res) => {
  res.send('nodejs-elearning')
})