const express = require('express');

var CityListController = require('../Controllers/location');
var RestaurentsController = require('../Controllers/restaurant');
var usercontroller = require('../Controllers/signup');
var mealtypeController = require('../Controllers/mealtype');
var menuController = require('../Controllers/menu');
var UserController = require('../Controllers/userDetails');

const route = express.Router();
route.post('/signup',usercontroller.signup);// for user create an account:

route.post('/login',usercontroller.login);// for user create an account:

route.get('/locations',CityListController.getCityList);//All location:

route.get('/restaurant/:cityNameVar',RestaurentsController.getRestaurantsByCityName);//Filtered restaurant by city:

route.get('/restaurant',RestaurentsController.getRestaurant);//All restaurants:

route.get('/mealtype',mealtypeController.getmealtype);//for Meal Type:

route.post('/filter',RestaurentsController.getfilter);//for filter all data:

route.get('/restaurants/:idNameVar',RestaurentsController.getRestaurantsByid);//All restaurants by id:

route.get('/menu/:menuIdNameVar',menuController.getRestaurantsByMenuid);//All restaurants menus:

route.post('/user',UserController.SaveUserDetails);//All restaurants menus:

module.exports = route;