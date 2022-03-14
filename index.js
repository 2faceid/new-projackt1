//// שלב 1 מיבאים ספריות 
//1.import npm libraries from node_modules
const express = require ('express');
const bodyparser = require('body-parser')

// שלב 2 מייצרים אזהו אפליקציה
//2.crate app
const app = express();

//שלב 3 באזה פונקצויליות אני רוצה להשתמש
//3.use body parset in app 
app.use(bodyparser.urlencoded());
//מאפשרת לשלוח ולקבל מבנה התונים מסוג גיסון
app.use(bodyparser.json());

//שלב 4 מייצרים את הראות עצמו
//4.create the route
const actionsroute=require('./actions');
app.use('/api',actionsroute)

//שלה 5 מיצרים שרת וירטואלי
//5.create virtul server environment
const port = 5000;
app.listen(port,function(){
console.log(`server is working via port ${port}`);
});
