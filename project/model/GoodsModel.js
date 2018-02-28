var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var Goods = new Schema({
    goods_name  : String,
    size      : String,
    sel      : String,
    addsel  : String,
    bigname  : String,
    saleprice : String,
    count_1    : String,
    count_2    : String,
    count_3    : String,
    count_4    : String,
    count_5    : String,
    count_6    : String,
    count_7    : String,
    img	        : String,
    create_date : { type: Date, default: Date.now }
});

// 创建model对象，与数据库中的文档（表）映射
var UserModel = mongoose.model('goods', Goods);
// commonJS规范(暴露接口)
module.exports = UserModel;