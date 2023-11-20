const userDetails = require('../Models/userDetails');

exports.SaveUserDetails = (req, res) => {
    const { Name, MobileNumber, Address } = req.body;

    const userObj = new userDetails({
        Name,
        MobileNumber,
        Address
    });
    userObj.save()
        .then (response => {
            res.status(200).json({
                message: "User Details Saved Successfully",
                Detail: response
            })
        })
        .catch(e => {
            res.status(500).json({ error: e });
        })
}