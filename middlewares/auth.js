function checkNotAutheticated(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect("/");
    }
    next();
}

function checkAutheticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = {
    checkNotAutheticated,
    checkAutheticated,
};
