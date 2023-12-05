'use strict';
var dbConn = require('./../../config/db.config');
//Product object create
var Product = function(product){
  this.p_title     = product.p_title;
  this.p_category      = product.p_category;
  this.p_qty          = product.p_qty;
  this.p_price          = product.p_price;
  
};
Product.create = function (newPro, result) {
dbConn.query("INSERT INTO Products set ?", newPro, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Product.findById = function (id, result) {
dbConn.query("Select * from Products where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Product.findAll = function (result) {
dbConn.query("Select * from Products", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Products : ', res);
  result(null, res);
}
});
};
Product.update = function(id, Product, result){
dbConn.query("UPDATE Products SET p_title=?,p_category=?,p_qty=?,p_price=? WHERE id = ?", [Product.p_title,Product.p_category,Product.p_qty,Product.p_price, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Product.delete = function(id, result){
dbConn.query("DELETE FROM Products WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Product;