console.log('module file connected');

(function(){
  'use strict'
  angular.module('app', ['ui.router', 'angularMoment'])
  // .constant('API_BASE_URL', 'https://workout-blender.herokuapp.com')
  .constant('API_BASE_URL', 'http://localhost:3000')
})()
