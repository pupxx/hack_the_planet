console.log('config.js is connected');
(function() {
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
    // .state({
    //   name: 'home', url: '/', redirectTo: 'games'
    // })

    .state({
      name: 'games',
      url: '/games',
      component: 'games.index'
    })

    // .state({
    //   name: 'story.index', url: '/stories', component: 'stories.index'
    // })

    // .state({
    //   name: 'story.show', url: '/stories/:id', component: 'stories.show'
    // })
  }
})()
