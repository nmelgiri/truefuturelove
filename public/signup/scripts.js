window.onload = function()
{
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

    // Get a reference to the database service
    var database = firebase.database();

    document.getElementById("submit").onclick = function sumbit_info()
    {
      console.log("1");
      // initializing objects
      var first_name = document.getElementById("first_name_input").value;
      var last_name = document.getElementById("last_name_input").value;
      var username = document.getElementById("username_input").value;
      var password = document.getElementById("password_input").value;
      var fake_password = document.getElementById("fake_password_input").value;

      var user = firebase.database().ref().child("user").child(username);
      user.child("first_name").set(first_name);
      user.child("last_name").set(last_name);
      user.child("password").set(password);
      user.child("fake_password").set(fake_password);
   }
}
