const express=require('express');
const path=require('path');
const app=express();
const bodyparser=require('body-parser');
const paths=require('./routes/paths');
app.set('view engine','ejs');
app.set('views','view');
app.use(bodyparser.urlencoded({extended:false}));
app.use(paths);
app.listen(3000);
 