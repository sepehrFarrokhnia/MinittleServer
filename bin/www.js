const http = require('http');
const app = require('../app');

const port = process.env.port || "8000";

app.set('port',port);

const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`server is up and running at port : ${port}`);  
})