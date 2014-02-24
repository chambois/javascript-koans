
describe("Access control", function() {

  it("should not be able to access variables within a closure", function() {
    var dog = function() {
      var name = "Fido";
      return {
        getName : function() {
          return name;
        }
      };
    }();

    var name = dog.getName();

    expect(dog.name).toBe(undefined);
    expect(name).toBe(/***/);

    name = "Lassy";
    expect(dog.getName()).toBe(/***/);
  });

  it("should know about object privacy failure", function() {
    var dog = function() {
      var details = {
        name : "Fido",
        age : 3,
        weight: "4kg"
      };

      return {
        getDetails : function() {
          return details;
        }
      };
    }();

    var details = dog.getDetails();
    expect(details.name).toBe();

    details.name = "Lassy";
    expect(dog.getDetails().name).toBe(/***/);
  });

  it("should know if array has the privacy failure", function() {
    var dog = function() {
      var names = ["Fido", "Smith"];

      return {
        getNames : function() {
          return names;
        }
      };
    }();

    var names = dog.getNames();
    expect(names).toEqual();

    names = ["Another", "Dog"];
    expect(dog.getNames()).toBe(/***/);
  });

  it("should know if array has the privacy failure", function() {
    var dog = function() {
      var names = [{
        name : "Fido"
      },
      {
        name : "Smith"
      }];

      return {
        getNames : function() {
          return names;
        }
      };
    }();

    var names = dog.getNames();
    expect(names).toEqual();

    names = [{ name : "Another" }, { name : "Dog" }];
    expect(dog.getNames()).toBe(/***/);
  });
});
