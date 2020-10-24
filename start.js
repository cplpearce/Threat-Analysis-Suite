// I M P O R T S 
// Import base App
const app   = require('./app');

const server = app.listen(3005, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
