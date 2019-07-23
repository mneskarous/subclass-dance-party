var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MakeBouncyDancer.prototype = Object.create(Dancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.show().animate({marginTop: "0px"}, Math.random()*500).animate({marginTop:"10px"}, Math.random()*500);
};