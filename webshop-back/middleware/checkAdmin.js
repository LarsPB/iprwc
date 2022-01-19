const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { roles: decodedToken.roles};
    if(req.userData.roles !== "ADMIN") {
        res.status(401).json({message: "This route is restricted to admin only" });
    }
    return next()

    
} 