/**
 * Created by Administrator on 2016/11/17.
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/chihuo");//chihuo是数据库的名称
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        name: String,
        password: String
    });
exports.user = db.model('users',userSchema);//users是数据库的集合名称