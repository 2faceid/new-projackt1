//1.import npm libraries from node_modules
const express = require ('express');
const bodyparser = require('body-parser')

//2.crate app
const app = express();

//3.use body parset in app 
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

//4.create the route
const actionsroute=require('./actions');
app.use('/api',actionsroute)

//5.create virtul server environment
const port = 5000;
app.listen(port,function(){
console.log(`server is working via port ${port}`);
});
