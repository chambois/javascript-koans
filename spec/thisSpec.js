
describe("this quirks", function() {

  // inspiration - http://snook.ca/archives/javascript/javascript_pass
  it("should pass primatives by value", function() {
    // given
    var x = 4;
    var someFunction = function(x) {
      x = 5; 
    };

    // when
    someFunction(x);

    // then
    expect(x).toEqual(/***/);
  });

  it("should pass objects by reference", function() {
    // given
    var someObject = {
      value : 6
    };
    var someFunction = function(obj) {
      obj.value = 7;
    };

    // when
    someFunction(someObject);

    // then
    expect(someObject.value).toBe(/***/);
  });

  it("should know what happens when passing an objects' function as a parameter", function() {
    // given
    var someObject = function() {
      this.value = 6;
    };
    someObject.prototype.add = function() {
      this.value++;
    };
    someFunction = function(fn) {
      fn();
    };
    var myObject = new someObject();
    myObject.add();

    // when
    someFunction(myObject.add);

    // then
    expect(myObject.value).toBe(/***/);
  });


  it("should know how to pass object into a method and call directly", function() {
    // given
    var someObject = function() {
      this.value = 6;
    };
    someObject.prototype.add = function() {
      this.value++;
    };
    someFunction = function(obj) {
      obj.add();
    };
    var myObject = new someObject();

    // when
    someFunction(myObject);

    // then
    expect(myObject.value).toBe(/***/);
  });

  it("should know how to pass object and method into a method and call directly", function() {
    // given
    var someObject = function() {
      this.value = 6;
    };
    someObject.prototype.add = function() {
      this.value++;
    };
    someFunction = function(fn, obj) {
      fn.call(obj);
    };
    var myObject = new someObject();

    // when
    someFunction(myObject.add, myObject);

    // then
    expect(myObject.value).toBe(/***/);
  });

});
