angular.module('starter')

// .controller('AppCtrl', function() {})
// .controller('LoginCtrl', function() {})
// .controller('DashCtrl', function() {});


.controller('DailyController', ['$scope','$http','$ionicPopup', function($scope,$http,$ionicPopup){
$http.get(base_url+'webservice/get_daily_max').success(function(data){
    $scope.chartdata=data;








   var names = [];

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        if(obj.item_name != undefined) {
            names.push(obj.item_name);
        }
    }

  
    
    
       var values = [];
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
   
        if(obj.item_name != undefined) {
            values.push(obj.SUMTOT);
        }
    }




// console.log(values);
     
 
    $scope.labels = names;

    $scope.series = ['LKR']
    $scope.data = [values];


  })








}])


.controller('WeeklyController', ['$scope','$http','$ionicPopup', function($scope,$http,$ionicPopup){
$http.get(base_url+'webservice/get_weekly_max').success(function(data){
    $scope.chartdata=data;








   var names = [];

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        if(obj.item_name != undefined) {
            names.push(obj.item_name);
        }
    }

  
    
    
       var values = [];
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
   
        if(obj.item_name != undefined) {
            values.push(obj.SUMTOT);
        }
    }




// console.log(values);
     
 
    $scope.labels = names;

    $scope.series = ['LKR']
    $scope.data = [values];


  })








}])

.controller('MonthlyController', ['$scope','$http','$ionicPopup', function($scope,$http,$ionicPopup){
$http.get(base_url+'webservice/get_monthly_max').success(function(data){
    $scope.chartdata=data;








   var names = [];

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        if(obj.item_name != undefined) {
            names.push(obj.item_name);
        }
    }

  
    
    
       var values = [];
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
   
        if(obj.item_name != undefined) {
            values.push(obj.SUMTOT);
        }
    }




// console.log(values);
     
 
    $scope.labels = names;

    $scope.series = ['LKR']
    $scope.data = [values];


  })








}])





.controller('meController', ['$scope','$http','$ionicPopup', function($scope,$http,$ionicPopup){
  $http.get(base_url+'webservice/get_all_contacts').success(function(data){
    $scope.idata=data;
  })

  $scope.DeleteContact= function (data){  

    var dataz = new Object();
    dataz= data;
    console.log(dataz);
    $http.post(base_url+'webservice/Deletecontact',dataz);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record Deleted Sucessfully!'
    });
  }








}])


.controller('IController', ['$scope','$http','$ionicPopup', function($scope,$http,$ionicPopup){
  $http.get(base_url+'webservice/get_all_items').success(function(data){
    $scope.idata=data;
  })

  $scope.DeleteItem= function (data){  

    var dataz = new Object();
    dataz= data;
    console.log(dataz);
    $http.post(base_url+'webservice/DeleteItem',dataz);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record Deleted Sucessfully!'
    });
  }








}])

.controller('GController', ['$scope','$http', function($scope,$http){
  $http.get(base_url+'webservice/get_all_users').success(function(data){
    $scope.da=data;
  })

}])




.controller('AppCtrl', function($scope, $state,$filter, $ionicPopup,$http, AuthService, AUTH_EVENTS) {
  $scope.username = AuthService.username();

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });

  // var val;

  $scope.setCurrentUsername = function(name) {
    $scope.username = name;
  };

  $scope.AddItem= function (input,Myselect){  

    var data = new Object();
    data= input;
    console.log(input);
    $http.post(base_url+'webservice/AddItem',data);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record added Sucessfully!'
    });
  };
  


  $scope.AddContact= function (input,Myselect){  

    var data = new Object();
    data= input;
    console.log(input);
    $http.post(base_url+'webservice/AddContact',data);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record added Sucessfully!'
    });
  };


  $scope.DeliverdItem= function (data){  

    var dataz = new Object();
    dataz= data;
    console.log(dataz);
    
    $http.post(base_url+'webservice/DeliverdItem',dataz);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record Updated Sucessfully!'
    });
  };



$http.get(base_url+'webservice/get_chart_items').success(function(data){
    $scope.chartdata=data;
 
 console.log('name',data);

   var names = [];

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        if(obj.item_name != undefined) {
            names.push(obj.item_name);
        }
    }

  
    
    
       var values = [];
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
   
        if(obj.item_name != undefined) {
            values.push(obj.sumq);
        }
    }

// console.log(values);
     
 
    $scope.labels = names;

    $scope.series = ['Series A']
    $scope.data = [values];


  })


 

  $scope.OrderItem= function (input,myForm){  
    var e = document.getElementById("item_q");
    var itm_q = e.options[e.selectedIndex].value;
    console.log(itm_q);
    var itm_p=maxVal.item_price;
    console.log(itm_p);
    var tot= itm_q*itm_p;
    var data = new Object();
    dataz=input;
    dataz.ipz = tot;



    console.log('ssss',dataz);

    $http.post(base_url+'webservice/OrderItem',dataz);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record added Sucessfully!'
    });
};

var itemp;

$scope.loading_event_f1 = function() {

  $http.get(base_url+'webservice/get_all_items').then(function(resp) {
    console.log('Success', resp);
    $scope.item_array = resp.data;
    $scope.item_array_length = resp.data.length;
    itemp=resp.data[0];
    console.log('second',itemp);


  }, function(err) {
    console.error('ERR', err);
            // err.status will contain the status code
          })
};

$scope.loading_event_f2 = function() {

  $http.get(base_url+'webservice/get_all_contacts').then(function(resp) {
    console.log('Success', resp);
    $scope.contact_array = resp.data;
    $scope.contact_array_length = resp.data.length;



  }, function(err) {
    console.error('ERR', err);
            // err.status will contain the status code
          })
}

$scope.loading_event_f3 = function() {

  $http.get(base_url+'webservice/get_all_employee').then(function(resp) {
    console.log('Success', resp);
    $scope.employee_array = resp.data;
    $scope.employee_array_length = resp.data.length;



  }, function(err) {
    console.error('ERR', err);
            // err.status will contain the status code
          })
};


$scope.loading_event_f4 = function() {

  $http.get(base_url+'webservice/get_delivery').then(function(resp) {
    console.log('Success', resp);
    $scope.d_array = resp.data;
    $scope.d_array_length = resp.data.length;
   $scope.arrayOfStrings = ["cash","credit card","ez cash"];


  }, function(err) {
    console.error('ERR', err);
            // err.status will contain the status code
          })
};

$scope.loading_event_f5 = function() {
   $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');



  $http.get(base_url+'webservice/FinishedTrans').then(function(resp) {
    console.log('Success', resp);
    $scope.d_array = resp.data;
    $scope.d_array_length = resp.data.length;
  


  }, function(err) {
    console.error('ERR', err);
            // err.status will contain the status code
          })
};







$scope.currentDate = new Date();
$scope.minDate = new Date(2000, 6, 1);
$scope.maxDate = new Date(2015, 12, 31);
 
 var mydate;
$scope.datePickerCallback = function (val) {
  
  var dc=val.toLocaleString();

   mydate = new Object();
   mydate=dc;
   
   console.log('oooo',mydate);

    if (!val) { 
        console.log('Date not selected');
    } else {
        console.log('Selected date is : ', val);
    }
};

$scope.select_date= function (){  


    var dataz = new Object();
    dataz.date= $filter('datez')( mydate );
    console.log(dataz);
    
 
    $http.post(base_url+'webservice/selectTrans',dataz).then(function(resp) {
  console.log('Success', resp);
  $scope.d_array = resp.data;


  // console.log('thi is it',$scope.me_array);
  // console.log('thi is it',line);
}, function(err) {
  console.error('ERR', err);
            // err.status will contain the status code
          })
  };



var maxVal;
var ss;
var line = [];

$scope.select_event_f1 = function(input) {
 var data = new Object();
 data= input;
 console.log(input);


 $http.post(base_url+'webservice/get_item_qty',data).then(function(resp) {
  console.log('Success', resp);
  $scope.i_array = resp.data;
  maxVal= resp.data[0];

      // console.log('price',item_price);
      $scope.i_array_length = resp.data.length;

      
      $scope.me_array=[];

      for (var i = 1; i <= maxVal.item_qty; i++) {

        $scope.me_array.push(i);


      };

      


      // $scope.select_event_f2 = function() {

      

      // }

  // console.log('thi is it',$scope.me_array);
  // console.log('thi is it',line);
}, function(err) {
  console.error('ERR', err);
            // err.status will contain the status code
          })
};



  //methanata refresh wena fucntion ekk danna one
  $scope.EditItem= function (input,myForm){  

    var data = new Object();
    data= input;
    console.log(input);
    $http.post(base_url+'webservice/EditItem',data);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Record Updated Sucessfully! '
    });
  };
})

// =========================================



.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
  $scope.data = {};

  $scope.login = function(data) {
    AuthService.login(data.username, data.password).then(function(authenticated) {
      $state.go('main.dash', {}, {reload: true});
      $scope.setCurrentUsername(data.username);
    }, function(err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };
})






.controller('DashCtrl', function($scope, $state, $http, $ionicPopup, AuthService) {
  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  

  
  $scope.performValidRequest = function() {
    $http.get('http://localhost:8100/valid').then(
      function(result) {
        $scope.response = result;
      });
  };

  $scope.performUnauthorizedRequest = function() {
    $http.get('http://localhost:8100/notauthorized').then(
      function(result) {
        // No result here..
      }, function(err) {
        $scope.response = err;
      });
  };

  $scope.performInvalidRequest = function() {
    $http.get('http://localhost:8100/notauthenticated').then(
      function(result) {
        // No result here..
      }, function(err) {
        $scope.response = err;
      });
  };
});

