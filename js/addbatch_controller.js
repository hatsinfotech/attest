app.controller('addBatchCtrl', ['$scope', function ($scope) {
  $scope.files = [
      {
            id: 1
            , name: 'File 1'
            , duedate: 25
            , notary: true,
            homeaffairs: true,
            mea: false,
            consulateType: "None",
            remarks:""
        },{
            id: 1
            , name: 'File 2'
            , duedate: 25
            , notary: true,
            homeaffairs: true,
            mea: false,
            consulateType: "None",
            remarks:""
        },{
            id: 1
            , name: 'File 3'
            , duedate: 25
            , notary: true,
            homeaffairs: true,
            mea: false,
            consulateType: "None",
            remarks:""
        },{
            id: 1
            , name: 'File 4'
            , duedate: 25
            , notary: true,
            homeaffairs: true,
            mea: false,
            consulateType: "None",
            remarks:""
        }
  ];
    
    $scope.addBatchRow = function(){
        $scope.files.push({
            id: 1
            , name: ''
            , duedate: 25
            , notary: true,
            homeaffairs: true,
            mea: false,
            consulateType: "None",
            remarks:""
        })
    }
}]);