var express = require('express');
var fs      = require('fs');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var app=express();
var cookieParser = require('cookie-parser')
var router  = express.Router();

var urlencodedParser = require('urlencoded-parser'); // ES5
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);
//app.use(middlewares);
app.use(cookieParser());
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/',function(req,res){
   //res.send('Hello World ');   

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username':  "d41048cf-e94d-448a-82f4-5aedf10242c9",
  'password':  "LuyXToIbXkFk",
  'version_date': '2017-02-27'
});
 var parameters = {
  'text':'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.'
,
  'features': {
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    }
  }
}
// //IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.'

 natural_language_understanding.analyze(parameters, function(err, response) {
   if (err)
//     //console.log('error:', err);
 res.send('Error');
 else
    //console.log(JSON.stringify(response, null, 2));
{

// 	myObject = response;

// this.injectString = JSON.stringify( myObject ).replace(/\\/g, '\\\\').replace(/"/g, '\\\"')
//res.send(response.usage);
res.render('main', {test :JSON.stringify() });


	
}
});
//
  });
app.post('/', urlencodedParser,function (req,res){
	 var text=req.body.value;
  
	var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username':  "d41048cf-e94d-448a-82f4-5aedf10242c9",
  'password':  "LuyXToIbXkFk",
  'version_date': '2017-02-27'
});
 var parameters = {
  'text': text
,
  'features': {
    'entities': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    },
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 2
    }
  }
}
//IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.'

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    
res.send('Error');
  else
    
{



res.render('main', {test: JSON.stringify(response) });

	
}
});
});
  


var port =8080;

app.listen(8080,function(){
	console.log('IMAD app port number ${port}!');
});
