const app = require('express')();

app.get('/', (req, res) => res.send('HΘMΞTΘWN™'));

module.exports = () => {
  app.listen(3000);
}