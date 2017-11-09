//Demo server file
//============================================
//SETUP
var express = require('express'),
	demo = express(),
	mongoose = require('mongoose'),
	logger = require('logger'),
	bodyPraser = require('body-praser')

demo.set('view engine', 'ejs');
demo.use(logger('dev'));
demo.use(bodyPraser.urlencoded({extended:true}));

//============================================
//DATABASE STUFF
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/demo_expess_app');
var personSchema = new mongoose.Schema({
						name: String,
						character: String	
					}); 
var PERSON = mongoose.model('PERSON', personSchema);

//============================================
//ROUTE LOGIC
//get request
demo.get('/', function(req,res){
	res.render('home');		//routs to home.ejs
});

demo.get('/persons', function(req,res){
	//get all the person database
	PERSON.find({}, function(err, persons){
		//routs to our dynamic persons.ejs file
		res.render('persons', {persons:persons});		
	});
});

//post request
//we will use a form (add ur form tag in the persons.ejs)for this post request 
demo.post('/createPerson', function(req, res){
	PERSON.create({
		name: req.body.name,
		character: req.body.character
	}, function(err, person){
		res.redirect('/persons');
	});
});

//============================================
//START SERVER
demo.listen(3000, function(){
	console.log('serving demo app on port 3000');
});