const user = require('../Models/signup');
//Create an Account
exports.signup = (req, res) => {
    const { email, password, name } = req.body;

    const userObj = new user ({
        email,
        password,
        name
    });

    userObj.save()
        .then(response => (
            res.status(200).json({
                message: "Account has been created and data saved in daytabase.",
                userDetails: response
            })
        ))
        .catch(err => {
            res.status(500).json({ error : err });
        })
}

//login
exports.login = (req, res) => {
    const { email, password } = req.body;

    user.find ({
        email,
        password
    })
    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                message: "Account has been validated and login successfully.",
                Account: "Login Sucessfully",
                Authentication:true,
                userDetails: response
            })
        }else{
            res.status(200).json({
                message: "Account has been not validated and unable to login.",
                Account: "fail to Login",
                Authentication:false,
                userDetails: response
            })
        }
        
    })
    .catch(err => {
        res.status(500).json({ error : err });
    })
}