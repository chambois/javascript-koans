
describe('Prototype chain', function() {

  it('should know how to link the prototype to a constructor', function() {
    function Parent(name) {
      this.name = name || "Default";
    };

    Parent.prototype.say = function() {
      return this.name;
    };

    function Child() {};

    function inherit(C, P) {
      //...
    };

    inherit(Child, Parent);

    var dad = new Parent("Tom");
    var kid = new Child();

    expect(kid.say()).toBe("Default");
  });

  it('should know how to borrow a constructor', function() {
    function Parent(name) {
      this.name = name;
    };

    function Child(name) {
      //...
    };

    var kid = new Child("Tim");

    expect(kid.name).toBe("Tim");
    expect(kid.say).toBe(undefined);
  });

  it('should know how to link the prototype and borrow a constructor', function() {
    function Parent(name) {
      this.name = name;
    };

    Parent.prototype.say = function() {
      return this.name;
    };

    function Child(name) {
      Parent.apply(this, arguments);
    }

    function inherit(C, P) {
      //...
    };

    inherit(Child, Parent);

    var kid = new Child("John");

    expect(kid.name).toBe("John");
    expect(kid.say()).toBe("John");
  });

  it('should know how to share the prototype', function() {
    function Parent(name) {
      this.name = name;
    };

    Parent.prototype.say = function() {
      return this.name;
    };

    function Child(name) {
      this.name = name; 
    }

    function inherit(C, P) {
      //...
    }

    inherit(Child, Parent);

    var kid = new Child("Sam");

    expect(kid.name).toBe("Sam");
    expect(kid.say()).toBe("Sam");
    // example to show danger in modifying child prototype
  });

  it('should know how to use a temporary constructor', function() {
    function Parent(name) {
      this.name = name;
    };

    Parent.prototype.say = function() {
      return this.name;
    }

    function Child(name) {
      this.name = name;
    }

    function inherit(C, P) {
      //...
    }

    inherit(Child, Parent);

    var kid = new Child("Matt");

    expect(kid.name).toBe("Matt");
    expect(kid.say()).toBe("Matt");
  });

  it('should know how to use a temporary constructor and store the superclass', function() {
    function Parent(name) {
      this.name = name;
    };

    Parent.prototype.say = function() { 
      return this.name;
    }

    function Child(name) {
      this.name = name;
    }

    function inherit(C, P) {
      //...
    }

    inherit(Child, Parent);

    var kid = new Child("James");

    expect(kid.name).toBe("James");
    expect(kid.say()).toBe("James");

    // expectation to force use of superclass
  });

  it('should know about prototypal inheritance', function() {
    var parent = {
      name : "Tom"
    };

    function object(obj) {
      //...
    };

    var child = object(parent);

    expect(child.name).toBe("Tom");
  });

  it('should know about prototypal inheritance using Object', function() {
    var parent = {
      name : "Tom"
    };

    //var child = 

    expect(child.name).toBe("Tom");
  });

  it('should know how to extend objects by copying properties', function() {
    var parent = {
      name : "Tom"
    };

    function extend(parent, child) {
      //...
    };

    var tomJr = extend(parent);

    expect(tomJr.name).toBe("Tom");
  });

  it('should know how to extend objects by deep-copying properties', function() {
    var parent = {
      name : "Tom",
      plays : {
        golf : true,
      }
    };

    function extendDeep(parent, child) {
      //...
    };

    var tomJr = extendDeep(parent);

    // this shouldn't work
    expect(tomJr.plays.golf).toBe(true);
  });

  it('should know how to borrow a method', function() {
    function someFunction() {
      var args = //...
      return args;
    }

    expect(someFunction(1, 2, 3)).toEqual([1, 2, 3]);
  });

  it('should know how to borrow and bind', function() {

  });

  it('should know how to bind using ECMAScript 5\'s bind method', function() {

  });
});
