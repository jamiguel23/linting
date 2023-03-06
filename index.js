const express = require('express');
const app = express();
const PORT = 3000;
var data = require('./data/test.json');

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) =>{
  var title = 'home page';
  res.render('pages/index',{'title' : title});
});

app.get('/about', (req, res) =>{
  var title = 'about page';
  res.render('pages/about',{'title' : title});
});

app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});


app.get('/projects', (req, res) =>{
  var title = 'projects';
  res.render('pages/projects',{'title' : title});
});

app.get('/contact', (req, res) =>{
  var title = 'contact';
  res.render('pages/contact',{'title' : title});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}, playa`)
});
