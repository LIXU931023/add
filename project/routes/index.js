var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel');
var GoodsModel = require('../model/GoodsModel');
var multiparty = require('multiparty');

/* GET home page. */
router.get('/page', function(req, res, next) {
  res.render('page', {});
});
router.get('/login',function(req,res){
	res.render('login',{});
});
router.get('/add',function(req,res){
	
	res.render("add", {});
	
})
router.post('/api/add',function(req,res){
	var Form = new multiparty.Form({
		uploadDir :'./public/images'
	})
	Form.parse(req,function(err,body,files){
		var goods_name = body.goods_name[0];
		var size = body.size[0];
		var sel = body.sel[0];
		var addsel = body.addsel[0];
		var bigname = body.bigname[0];
		var saleprice = body.saleprice[0];
		var count_1 = body.count_1[0];
		var count_2 = body.count_2[0];
		var count_3 = body.count_3[0];
		var count_4 = body.count_4[0];
		var count_5 = body.count_5[0];
		var count_6 = body.count_6[0];
		var count_7 = body.count_7[0];

		var imgName = files.img[0].path;
		imgName = imgName.substr(imgName.lastIndexOf('\\') +1);
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.size = size;
		gm.sel = sel;
		gm.addsel = addsel;
		gm.bigname = bigname;
		gm.saleprice = saleprice;
		gm.count_1 = count_1;
		gm.count_2 = count_2;
		gm.count_3 = count_3;
		gm.count_4 = count_4;
		gm.count_5 = count_5;
		gm.count_6 = count_6;
		gm.count_7 = count_7;
		
		gm.img = imgName;
		gm.save(function(err){
			if(!err){
				res.send('商品保存成功');
			}else{
				res.send('商品保存失败')
			}
		})
	})
})
router.post('/api/add',function(req,res){
	GoodsModel.find({},function(err,docs){
		res.render('list',{list:docs});
	})
})
router.post("/api/login",function(req,res){
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		status:1,
		message:"登录成功"
	}
	UserModel.find({username:username,psw:psw},function(err,docs){
		if(!err && docs.length > 0){
			console.log('登录成功')
			res.send(result);
		}else{
			console.log('登录失败，请检查您的用户名或密码');
			result.status = -190;
			result.message = '登录失败，请检查您的用户名或密码';
			res.send(result);
		}
	})

})

module.exports = router;
