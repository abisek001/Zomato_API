const cityLocation = require('../Database/locations');

exports.getCityList = (req, res) => {
    cityLocation.find({},{})/*name:1*/
        .then( response  => {
            res.status(200).json({
                message:"City list loaded successfully",
                cityList: response
            });
        })
        .catch(err => {
            res.status(500).json({ error:err });
        });
};
