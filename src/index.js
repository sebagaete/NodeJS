var http = require ("http");

//var log = require ("./modules/my-log");
var {info,error} = require ("./modules/my-log");



var server = http.createServer(function(request,response){
    
    if(request.url=== "/"){

        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Home Page</p></body></html>'); 
        response.end();

    }else if (request.url === "/exit"){

        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>Bye</p></body></html>'); 
        response.end();

    } else if (request.url === "/info"){

        var result = info(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();

    } else if (request.url === "/error"){

        var result = error(request.url);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(result);
        response.end();

    }else {

        response.writeHead(404,{'Content-Type':'text/html'});
        response.write('<html><body><p>Not Found</p></body></html>'); 
        response.end();
    }
});


server.listen(4000);
console.log("running on 4000");