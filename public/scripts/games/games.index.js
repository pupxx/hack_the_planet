console.log('games.js is connected');
(function(){
  angular.module('app')
  .component('games.index', {
    controller: controller,
    templateUrl: './scripts/games/games.html'
  })

  controller.$inject = ['API_BASE_URL', '$http']
  function controller (baseUrl, $http){
    const vm = this

    vm.$onInit = onInit;


  function onInit (){
      // vm.show = false
      console.log('hi');
      $http.get(`${baseUrl}/games`).then((games)=>{
        console.log('after http call');
        console.log(games);
      })
    }

  }
})()
