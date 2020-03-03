exports.index=(req,res,next)=>{
res.render('index',{
    path:'/',
    pageTitle:'Homepage'
});
}