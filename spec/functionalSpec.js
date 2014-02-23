describe("functional practise", function() {

  var forEach = function(array, action) {
    for (var i = 0, max = array.length; i < max; i++) {
      action(array[i]);
    }
  };

  it("should be able to use reduce to sum numbers", function() {
    // given
    var numbers = [1, 2, 3];
    var add = function(x, y) {
      return x + y;
    };

    // when
    var reduce = function(/*...*/) {
      //...
    };

    // then
    expect(reduce(numbers, 0, add)).toBe(6);
  });

  it('should be map to create a new result set', function() {
    // given
    var numbers = [1, 2, 3];
    var addTwo = function (x) {
      return x + 2;
    };

    // when
    var map = function(/*...*/) {
      //...
    };

    // then
    expect(map(numbers, addTwo)).toBe([3, 4, 5]);
  });

  it('should find a given element in an array', function() {
    // given
    var people = [1, 2, 3, 4];
    var condition = function(elm) {
      return (elm % 2) === 0; 
    };

    // when
    var find = function(/*...*/) {
      //...
    };

    // then
    expect(find(people, condition)).toBe(2);
  });

  it('should select elements from array given a condition', function() {
    // given
    var numbers = [1, 2, 3, 4];
    var condition = function(elm) {
      return (elm % 2) === 0;
    };

    // when
    var select = function(/*...*/) {
      //...
    };

    // then
    expect(select(numbers, condition)).toBe([2, 4]);
  });

  it('should reject elements from array given a condition', function() {
    // given
    var numbers = [1, 2, 3, 4];
    var condition = function(elm) {
      return (elm % 2) === 0;
    };

    // when
    var reject = function(/*...*/) {
      //...
    };

    // then
    expect(reject(numbers, condition)).toBe([1, 3]);
  });

  it('should return true when all elements match condition', function() {
    // given
    var evenNumbers = [2, 4, 6, 8];
    var mixedNumbers = [1, 2, 3, 4];
    var condition = function(elm) {
      return (elm % 2) === 0;
    };

    // when
    var every = function(/*...*/) {
      //...
    };

    // then
    expect(every(evenNumbers, condition)).toBeTruthy();
    expect(every(mixedNumbers, condition)).toBeFalsy();
  });
  
  it('should return true when only some elements match condition', function() {
    // given
    var numbers = [1, 2, 3, 4];
    var oddNumbers = [1, 3];
    var condition = function(elm) {
      return (elm % 2) === 0;
    };

    // when
    var some = function(/*...*/) {
      //...
    };

    // then
    expect(some(numbers, condition)).toBeTruthy();
    expect(some(oddNumbers, condition)).toBeFalsy();
  });

  // api

  // object functionals

  // pass by ref

  // privay failures

  // inheritance patterns

  // currying

  // mix-in

  // klass

});
