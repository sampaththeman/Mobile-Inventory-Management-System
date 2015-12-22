// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter','chart.js','ionic-datepicker'])
// bower install angular-mocks --save
// <script src="lib/angular-mocks/angular-mocks.js"></script>
// https://docs.angularjs.org/api/ngMockE2E

.filter('datez', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; } 
 
  var _date = $filter('date')(new Date(input), 'yyyy/MM/dd');
 
  return _date.toUpperCase();

 };
})

.filter('true_false', function() {
    return function(text, length, end) {
        if (text === '1') {
            return ' Delieverd';
        }
        return 'Not Deliverd';
    }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, USER_ROLES,$ionicConfigProvider) {

$ionicConfigProvider.tabs.position('bottom'); // inject karanawa android walata tab bar eka down karanna


  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('main', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'
  })

  

  .state('main.dash', {
    url: 'main/dash',
    views: {
        'dash-tab': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
    }
  })

    .state('main.user', {
    cache: false , 
    url: 'main/user',
    views: {
        'public-tab': {
          templateUrl: 'templates/user.html'
          // controller:'GController'
        }
    }
  })
   

     .state('main.item', {
    cache: false , 
    url: 'main/item',
    views: {
        'public-tab': {
          templateUrl: 'templates/items.html'
        }
    }
  })

     .state('main.finished_trans', {
    cache: false , 
    url: 'main/finished_trans',
    views: {
        'public-tab': {
          templateUrl: 'templates/v_completd_trns.html'
        }
    }
  })


          .state('main.edit_item', {
    cache: false , 
    url: 'main/edit_item',
    views: {
        'public-tab': {
          templateUrl: 'templates/e_items.html'
        }
    }
  })
     
        .state('main.transactions', {
    cache: false ,     
    url: 'main/transactions',
    views: {
        'public-tab': {
          templateUrl: 'templates/transactions.html'
        }
    }
  })

       .state('main.delivery', {
    cache: false ,     
    url: 'main/delivery',
    views: {
        'public-tab': {
          templateUrl: 'templates/delivery.html'
        }
    }
  })
    .state('main.payment', {
    cache: false,  
    url: 'main/payment',
    views: {
        'public-tab': {
          templateUrl: 'templates/payments.html'
        }
    }
  })
  
  .state('main.view_item', {
    cache: false,
    url: 'main/view_item',
    views: {
        'public-tab': {
          templateUrl: 'templates/v_items.html'
        }
    }
  })

   .state('main.add_item', {
    cache: false,
    url: 'main/add_item',
    views: {
        'public-tab': {
          templateUrl: 'templates/add_items.html'
        }
    }
  })

    .state('main.order', {
    cache: false,
    url: 'main/order',
    views: {
        'public-tab': {
          templateUrl: 'templates/orders.html'
        }
    }
  })

     .state('main.delete_item', {
    cache: false,
    url: 'main/delete_item',
    views: {
        'public-tab': {
          templateUrl: 'templates/d_items.html'
        }
    }
  })

    .state('main.contact', {
      cache: false,
    url: 'main/contact',
    views: {
        'public-tab': {
          templateUrl: 'templates/contacts.html'
        }
    }
  }) 

  .state('main.addcontact', {
    cache: false,
    url: 'main/addcontact',
    views: {
        'public-tab': {
          templateUrl: 'templates/add_contacts.html'
        }
    }
  })  

    .state('main.dailyrep', {
    cache: false,
    url: 'main/dailyrep',
    views: {
        'public-tab': {
          templateUrl: 'templates/daily_rep.html'
        }
    }
  }) 

  .state('main.weeklyrep', {
    cache: false,
    url: 'main/weeklyrep',
    views: {
        'public-tab': {
          templateUrl: 'templates/weekly_rep.html'
        }
    }
  })  

  .state('main.monthlyrep', {
    cache: false,
    url: 'main/monthlyrep',
    views: {
        'public-tab': {
          templateUrl: 'templates/monthly_rep.html'
        }
    }
  })    

   .state('main.viewcontact', {
    cache: false,
    url: 'main/viewcontact',
    views: {
        'public-tab': {
          templateUrl: 'templates/v_contacts.html'
        }
    }
  }) 

   .state('main.delcontact', {
    cache: false,
    url: 'main/delcontact',
    views: {
        'public-tab': {
          templateUrl: 'templates/d_contacts.html'
        }
    }
  })   


   

  .state('main.public', {
    url: 'main/public',
    views: {
        'public-tab': {
          templateUrl: 'templates/public.html'
        }
    }
  })
  .state('main.admin', {
    url: 'main/admin',
    views: {
        'admin-tab': {
          templateUrl: 'templates/admin.html'
        }
    },
    data: {
      authorizedRoles: [USER_ROLES.admin]
    }
  });
  $urlRouterProvider.otherwise('/login');
})

// .run(function($httpBackend){
//   $httpBackend.whenGET('http://localhost:8100/valid')
//         .respond({message: 'This is my valid response!'});
//   $httpBackend.whenGET('http://localhost:8100/notauthenticated')
//         .respond(401, {message: "Not Authenticated"});
//   $httpBackend.whenGET('http://localhost:8100/notauthorized')
//         .respond(403, {message: "Not Authorized"});

//   $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
//  })

// .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
//   $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

//     if ('data' in next && 'authorizedRoles' in next.data) {
//       var authorizedRoles = next.data.authorizedRoles;
//       if (!AuthService.isAuthorized(authorizedRoles)) {
//         event.preventDefault();
//         $state.go($state.current, {}, {reload: true});
//         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
//       }
//     }

//     if (!AuthService.isAuthenticated()) {
//       if (next.name !== 'login') {
//         event.preventDefault();
//         $state.go('login');
//       }
//     }
//   });
// });
