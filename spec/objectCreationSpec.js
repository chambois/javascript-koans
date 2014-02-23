
xdescribe('Creating object patterns', function() {

  it('should create namespacing', function() {
    // given
    var App = {};

    // when
    App.namespace = function(nameSpacing) {
      //...
    };

    // then
    expect(App.foo).toBe({});
    expect(App.foo.bar).toBe({});
    expect(App.fiz.baz).toBe({});
  });

  it('should know the sandbox pattern', function() {
    // given

    // when

    // then
    expect();
  });
});
