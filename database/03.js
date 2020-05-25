const mongoose = require('mongoose');
//创建mongoose数据库连接
mongoose.connect('mongodb://localhost/playground',{useUnifiedTopology: true})
.then(() => console.log('数据库连接成功'))
.catch(err => console.log(err,'数据库连接失败'));

//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

// 使用规则创建集合
const Course = mongoose.model('Course',courseSchema)

//向集合中插入文档
// Course.create({name:'JavaScript',author:'陈小小',isPublished:true},(err,result) => {
//     console.log(err);
//     console.log(result);
// })

Course.create({name:'JavaScript3',author:'陈小小',isPublished:true})
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
    