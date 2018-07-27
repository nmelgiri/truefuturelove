// Initialize Firebase
var config = {
  apiKey: "AIzaSyDxsoafASxDoKRtR3VuMA-7YlpGZ2MIAG8",
  authDomain: "secretly-loving.firebaseapp.com",
  databaseURL: "https://secretly-loving.firebaseio.com",
  projectId: "secretly-loving",
  storageBucket: "secretly-loving.appspot.com",
  messagingSenderId: "242196239817"
};
firebase.initializeApp(config);

var app = angular.module('chatApp', ['firebase']);

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        })
    }

})
