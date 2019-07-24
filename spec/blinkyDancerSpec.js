describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('bouncyDancer', function() {
  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new MakeBouncyDancer(10, 20, timeBetweenSteps);
  });
  
  it('should have a step function to make its node bounce', function() {
    sinon.spy(bouncyDancer.$node, 'show');
    bouncyDancer.step();
    expect(bouncyDancer.$node.show.called).to.be.true;
  });
  
  it('should call step at least once per second', function() {
    sinon.spy(bouncyDancer, 'step');
    expect(bouncyDancer.step.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    expect(bouncyDancer.step.callCount).to.be.equal(1);
  
    clock.tick(timeBetweenSteps);
    expect(bouncyDancer.step.callCount).to.be.equal(2);
  });
});

describe('jigglyDancer', function() {
  var jigglyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jigglyDancer = new MakeJigglyDancer(10, 20, timeBetweenSteps);
  });
  
  it('should have a step function to make its node bounce', function() {
    sinon.spy(jigglyDancer.$node, 'show');
    jigglyDancer.step();
    expect(jigglyDancer.$node.show.called).to.be.true;
  });
  
  it('should call step at least once per second', function() {
    sinon.spy(jigglyDancer, 'step');
    expect(jigglyDancer.step.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    expect(jigglyDancer.step.callCount).to.be.equal(1);
  
    clock.tick(timeBetweenSteps);
    expect(jigglyDancer.step.callCount).to.be.equal(2);
  });
});