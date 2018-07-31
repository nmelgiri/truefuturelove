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
var username = window.location.hash.substring(1);
var chatroom = firebase.database().ref().child("users/"+username);
console.log(chatroom);
console.log(firebase.database().ref("users/"+username));
var chatroom_name;

app.controller('ChatController', function($scope, $firebaseArray) {
  firebase.database().ref("users/"+username).once('value').then(function(snapshot)
  {
    console.log("once");
    snapshot.forEach(function(childSnapshot)
    {
      console.log("x");
      console.log(childSnapshot);
      if (childSnapshot == "primary chatoom")
      {
        chatroom_name = childSnapshot.val();
      }
    });
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function() {
      $scope.messages.$add({
          message: $scope.messageText,
          date: Date.now()
      });
    }
  });

});
