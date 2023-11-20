const mealtype = require('../Models/mealtype');

exports.getmealtype = (req, res) => {
    mealtype.find({},{}) /*name:1*/
        .then( response  => {
            res.status(200).json({
                message:"Mealtypes loaded successfully",
                mealList: response
            });
        })
        .catch(err => {
            res.status(500).json({ error:err });
        });
};
