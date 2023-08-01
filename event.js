var Controller = function () {};
var VP = new Controller();
var eardata;
var eardata2;
Controller.prototype.earcut_ = function (a, b, c) {
  console.log(a)
  eardata=a;
  eardata2=b;
 var ear= earcut(b[1], null, 2);
 console.log(ear);
 return ear;
}
