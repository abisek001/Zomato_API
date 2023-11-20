const restaurant_List = require('../Database/restaurant');
// Get the restaurant by location:
exports.getRestaurant = (req, res) => {
    restaurant_List.find()
        .then( response  => {
            res.status(200).json({
                message:"City list loaded successfully",
                restaurantsList: response
            });
        })
        .catch(err => {
            res.status(500).json({ error:err });
        });
};


//Filter the data:

exports.getfilter =(req, res) => {
    let { location, lcost, hcost, cuisine, mealtypes, sort, page } = req.body;

    sort = sort ? sort : 1
    page = page ? page : 1

    const itemPerPage = 2;
    let startIndex = page * itemPerPage - itemPerPage;
    let endIndex = page * itemPerPage;

    let filterObj = {};

    location && (filterObj["city_name"] = location.toLowerCase());
    lcost && hcost && (filterObj["cost"] = { $lte: hcost, $gte :lcost });
    cuisine && (filterObj["Cuisine.cuisine"] = { $in: cuisine });
    mealtypes && (filterObj['type.mealtype'] = mealtypes);

    restaurant_List.find(filterObj).sort({cost : sort})
        .then(responce => {
            const filterReponce = responce.slice(startIndex,endIndex);
            res.status(200).json({
                message: "Filtered Restautant fitches successfully",
                filterRestaurant: filterReponce
            });
        }).catch(err => {
            res.status(500).json(error = err);
        })
}
// Get the restaurant by city:

exports.getRestaurantsByCityName = (req, res) => {
    const {cityNameVar} = req.params;
    restaurant_List.find({ city_name: cityNameVar.toLowerCase()},{})
    .then(respon => {
        res.status(200).json({
            message:"Restaurents list by city name fetched successfully",
            restaurantlist: respon
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

// Get the restaurant by ID:

exports.getRestaurantsByid = (req, res) => {
    const {idNameVar} = req.params;
    restaurant_List.findById( idNameVar )
    .then(respon => {
        res.status(200).json({
            message:"Restaurents list by ID name fetched successfully",
            restaurantOne: respon
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

