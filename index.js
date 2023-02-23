const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  var title = 'home page';
  res.render('index',{'title' : title});
  // res.status(200).send('Ola world')
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}, playa`)
});
