/**
 * Created by lenovo on 2017/3/6.
 */
var http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World\n");
}).listen(808);
console.log('server runnong at http://127.0.0.0:808');
