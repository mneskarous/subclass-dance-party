var MakeJigglyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MakeJigglyDancer.prototype = Object.create(Dancer.prototype);
MakeJigglyDancer.prototype.constructor = MakeJigglyDancer;

MakeJigglyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.show().animate({marginLeft: "0px"}, Math.random() * 500).animate({marginLeft: "10px"}, Math.random() * 500);
  this.$node.css("border", "30px solid pink");
};