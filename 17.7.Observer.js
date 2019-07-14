// 对象间解耦
// 学生类
var Student = function(result){
    var that = this;
    // 学生回答结果
    that.result = result;
    // 学生回答问题动作
    that.say = function(){
        console.log(that.result);
    }
};
// 回答问题方法
Student.prototype.answer = function(question){
    // 注册参数问题
    Observer.regist(question,this.say);
}
// 学生呼呼睡觉，此时不能回答问题
Student.prototype.sleep = function(question){
    console.log(this.result +' '+question+'已被注销');
    Observer.remove(question,this.say);
}
// 教师类
var Teacher = function(){
    // 教师提问问题的方法
    Teacher.prototype.ask = function(question){
        console.log('问题是:'+ question);
        // 发布提问消息
        Observer.fire(question);
    }
}

// 17.8 模拟老师讲课，三位学生听课
var student1 = new Student('学生1回答问题'),
    student2 = new Student('学生2回答问题'),
    student3 = new Student('学生3回答问题');

// 三位同学订阅(监听)了老师提问的两个问题
student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');
student3.sleep('简述观察者模式');

// 创建一个教师实例
var teacher = new Teacher();
teacher.ask('什么是设计模式');
teacher.ask('简述观察者模式');