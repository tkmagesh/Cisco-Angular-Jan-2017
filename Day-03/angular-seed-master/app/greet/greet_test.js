'use strict';

describe('myApp.greet module', function() {

  beforeEach(module('myApp.greet'));

  describe('greet controller', function(){

    it('should initialize the name with empty string', inject(function($controller) {
    	var dummyScope = {};

      //spec body
      var greetCtrl = $controller('greetCtrl', {$scope : dummyScope});

      expect(dummyScope.name).toBe('');

    }));

    it('should populate greetMessage when greeted', inject(function($controller) {
    	var dummyScope = {};

      //spec body
      var greetCtrl = $controller('greetCtrl', {$scope : dummyScope});

      dummyScope.name = 'Magesh';
      dummyScope.greet();

      expect(dummyScope.greetMessage).toBe('Hi Magesh, Have a nice day!');

    }));

  });
});