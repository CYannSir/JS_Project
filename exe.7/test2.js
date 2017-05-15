//原型链继承
/*
function Shape(color){
    this.color = color;
    this.getColor = function(){
        return this.color;
    }
    this.setColor = function(){
        return this.color = color;
    }
};

function Rectangle(){
    this.length = 5;
    this.width = 5 ;
    this.color = "red";
};

function Circle(){
    this.r = 5; 
    this.color = "blue";   
};

Rectangle.prototype = new Shape();
Circle.prototype = new Shape();

Rectangle.prototype.getArea = function(){
    return this.length * this.width;
}

Circle.prototype.getArea = function(){
    return this.r * this.r * Math.PI;
}

var Rectangle1 = new Rectangle();
var Circle1 = new Circle(); 

console.log(Rectangle1.color);
console.log(Rectangle1.getArea());
console.log(Rectangle1.constructor);

console.log(Circle1.color);
console.log(Circle1.getArea());
console.log(Circle1.constructor);

*/
//借用构造函数继承
/*
function Shape(color){
    this.color = color;
    this.getColor = function(){
        return this.color;
    }
    this.setColor = function(){
        return this.color = color;
    }
};

function Rectangle(){
    this.length = 5;
    this.width = 5 ;
    Shape.call(this , "red");//对象冒充继承，可以传参
};

function Circle(){
    this.r = 5; 
    Shape.call(this , "blue");//对象冒充继承，可以传参 
};

Rectangle.prototype.getArea = function(){
    return this.length * this.width;
}

Circle.prototype.getArea = function(){
    return this.r * this.r * Math.PI;
}

var Rectangle1 = new Rectangle();
var Circle1 = new Circle(); 

console.log(Rectangle1.color);
console.log(Rectangle1.getArea());
console.log(Rectangle1.constructor);

console.log(Circle1.color);
console.log(Circle1.getArea());
console.log(Circle1.constructor);

console.log(Rectangle1.getColor == Circle1.getColor);
console.log(Rectangle1.setColor == Circle1.setColor);
*/

//组合继承
/*
function Shape(color){
    this.color = color;
};

Shape.prototype.getColor = function() {
    return this.color;
};

Shape.prototype.setColor = function(color) {
    return this.color = color;
};

Rectangle.prototype = new Shape(); //一次
function Rectangle(){
    this.length = 5;
    this.width = 5 ;
    Shape.call(this , "red");//对象冒充继承，可以传参
};

Circle.prototype = new Shape(); //一次
function Circle(){
    this.r = 5; 
    Shape.call(this , "blue");//对象冒充继承，可以传参 
};

Rectangle.prototype.getArea = function(){
    return this.length * this.width;
}

Circle.prototype.getArea = function(){
    return this.r * this.r * Math.PI;
}

var Rectangle1 = new Rectangle();
var Circle1 = new Circle(); 

console.log(Rectangle1.color);
console.log(Rectangle1.getArea());
console.log(Rectangle1.constructor);

console.log(Circle1.color);
console.log(Circle1.getArea());
console.log(Circle1.constructor);
console.log(Rectangle1.getColor == Circle1.getColor);
console.log(Rectangle1.setColor == Circle1.setColor);
*/

//原型式继承
/*
function obj (o){ //中转函数
    function F(){}
    F.prototype = o ;
    return new F();
}
var Shape = { //父类
    color:this.color
    ,
    getColor: function(){
        return this.color;
    }
    ,
    setColor: function(){
        return this.color = color;
    }
}
var Rectangle = obj(Shape);
Rectangle.color = "red";
Rectangle.length = 5 ;
Rectangle.width = 5 ; 
Rectangle.getArea = function(){
    return this.length * this.width;
}

var Circle = obj (Shape);
Circle.color = "blue";
Circle.r = 5;
Circle.getArea = function(){
    return this.r * this.r * Math.PI;
}

console.log(Rectangle.color);
console.log(Rectangle.getArea());
console.log(Rectangle.constructor);

console.log(Circle.color);
console.log(Circle.getArea());
console.log(Circle.constructor);
console.log(Rectangle.getColor == Circle.getColor);
console.log(Rectangle.setColor == Circle.setColor);

*/

//寄生式继承
/*
function obj (o){ //中转函数
    function F(){}
    F.prototype = o ;
    return new F();
}

function create (o){ //寄生函数
    var f = obj (o);
    f.getColor = function(){
        return this.color; 
    }
    f.setColor = function(){
        return this.color = color; 
    }

    return f;
}

var Shape = { //父类
    color:this.color
}
var Rectangle = create(Shape);
Rectangle.color = "red";
Rectangle.length = 5 ;
Rectangle.width = 5 ; 
Rectangle.getArea = function(){
    return this.length * this.width;
}

var Circle = create (Shape);
Circle.color = "blue";
Circle.r = 5;
Circle.getArea = function(){
    return this.r * this.r * Math.PI;
}

console.log(Rectangle.color);
console.log(Rectangle.getArea());
console.log(Rectangle.constructor);

console.log(Circle.color);
console.log(Circle.getArea());
console.log(Circle.constructor);
console.log(Rectangle.getColor == Circle.getColor);
console.log(Rectangle.setColor == Circle.setColor);
*/
//寄生组合式继承
function obj (o){ //中转函数
    function F(){}
    F.prototype = o ;
    return new F();
}

function create_rectangle(Shape , Rectangle ){//寄生函数1
    var f = obj (Shape.prototype);
    f.constructor = Rectangle;
    Rectangle.prototype = f;
}

function create_circle(Shape , Circle){//寄生函数2
    var f = obj (Shape.prototype);
    f.constructor = Circle;
    Circle.prototype = f;
}

function Shape(color){
    this.color = color;
}

Shape.prototype.getColor = function() {
    return this.color;
};

Shape.prototype.setColor = function(color) {
    return this.color = color;
};

//Rectangle.prototype = new Shape(); //一次
function Rectangle(color){
    this.length = 5;
    this.width = 5 ; 
    Shape.call(this , color);//对象冒充继承，可以传参
};
create_rectangle(Shape , Rectangle);
Rectangle.prototype.getArea = function(){
    return this.length * this.width;
}


Circle.prototype = new Shape(); //一次
function Circle(color){
    this.r = 5; 
    Shape.call(this , color);//对象冒充继承，可以传参 
};
create_circle(Shape , Circle);
Circle.prototype.getArea = function(){
    return this.r * this.r * Math.PI;
}

var Rectangle1 = new Rectangle("red");
var Circle1 = new Circle("blue");

console.log(Rectangle1.color);
console.log(Rectangle1.getArea());

console.log(Circle1.color);
console.log(Circle1.getArea());

console.log(Rectangle1.constructor);
console.log(Circle1.constructor);