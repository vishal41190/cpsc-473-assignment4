var express = require("express"),
    http = require("http"),
    yelp = require("yelp"),
    app;

// Create our Express-powered HTTP server
// and have it listen on port 3000
app = express();

http.createServer(app).listen(3000);


// set up a static file directory to use for default routing
app.use(express.static(__dirname));

// set up our routes
// for user login
app.get("/yelp", function (req, res) {

    var city = req.query.city;
    var yelp = require("yelp").createClient({
    consumer_key: "ZfsdqOyHkpoILwcUmWx1yQ", 
    consumer_secret: "Ry6Cz_4F_Q98GIEWEt_uwOiOkmE",
    token: "x-HGvtSuajvWQ6ctGVTKO1lNPcs1_jPu",
    token_secret: "fSn3ZYk_lcNHdz6y96WeVJF238c"
    });
    
    //console.log("city="+city);
    // See http://www.yelp.com/developers/documentation/v2/search_api
    yelp.search({term: "restaurants", location:city , limit: 5 }, function  (error, data) {
    console.log(error);
    res.format({
        'application/jsonp': function(){
    res.send('yelp('+JSON.stringify(data)+');');
  }
    });
    });
    
});

