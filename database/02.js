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

const course = new Course({
    name : 'node.js基础',
    author : '小陈陈',
    isPublished: true
});
//插入数据库
course.save();