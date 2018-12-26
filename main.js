var App = {
  clearFooter: function() {
    var testButton = document.getElementById('button');
    testButton.addEventListener('click', function(e) {
      return this.dummyMethod.bind();
    })
    return App2.dummyMethod.bind();
  },
  dummyMethod: function() {
    return 'value from dummyMethod'
  }
}

var App2 = {
  dummyMethod: function() {
    return 'value from destroyCompleted'
  }
}

App.clearFooter();

/*

! representation for this in methods (case2) is Object in scope
! representation for this in methods (case2) in console is iteratedProps

! needs to refer to a method with the same parentObj
?

*/
