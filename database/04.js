const mongoose = require('mongoose');
//创建mongoose数据库连接
mongoose.connect('mongodb://localhost/playground',{useUnifiedTopology: true})
.then(() => console.log('数据库连接成功'))
.catch(err => console.log(err,'数据库连接失败'));

//创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
})

const User = mongoose.model('User',userSchema);

//查询所有数据
//User.find().then(result => console.log(result))
//根据id查询
//User.find({_id:'5c09f1e5aeb04b22f8460965'}).then(result => console.log(result))

//findOne方法返回一条数据
//User.findOne({name:'李四'}).then(result => console.log(result))

//匹配大于小于(范围查询)
//User.find({age : {$gt: 20 ,$lt: 50}}).then(result => console.log(result))

//包含查询
//User.find({hobbies : {$in:['足球']}}).then(result => console.log(result));

//选择要查询的字段
//User.find().select('name email -_id').then(result => console.log(result))

//根据年龄进行排序（升序）
//User.find().sort('age').then(result => console.log(result))

//根据年龄进行排序（降序）
User.find().sort('-age').then(result => console.log(result))