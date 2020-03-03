const db=require('../util/database');
exports.signUp=(req,res,next)=>{
res.render('signup',{
    path:'/signup',
    pageTitle:'SignUp'
});
}

exports.posts=(req,res,next)=>{
    var email=req.body.email;
    var pass=req.body.pass;
    console.log(email);
    console.log(pass);
    db.execute('INSERT INTO logindb.users (email,pass) VALUES ("'+email+'","'+pass+'")')
    .then(result=>{
        console.log(result);
      //  res.redirect('/login');
        res.render('login',{
        path:'/login',
        pageTitle:'Login'
    });
    })
    .catch(err=>
    console.log(err));
}