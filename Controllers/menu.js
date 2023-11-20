
const restaurantMenu = require('../Models/menu');

// Get the restaurant by menu ID:
exports.getRestaurantsByMenuid = (req, res) => {
    const {menuIdNameVar} = req.params;
    restaurantMenu.find({ restaurantId: menuIdNameVar },{})
    .then(respon => {
        res.status(200).json({
            message:"Restaurents Menu by ID fetched successfully",
            restaurantsMenu: respon
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}
