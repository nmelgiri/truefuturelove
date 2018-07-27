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
var users = database.ref().child("user");

var duplicate_user = true;
function user_exists()
{
  duplicate_user = false;
  username = document.getElementById("username_input").value;
  users.once('value').then(function(snapshot)
  {
    snapshot.forEach(function(childSnapshot)
    {
      if (childSnapshot.key === username)
      {
        duplicate_user = true;
        console.log(duplicate_user);
        return;
        console.log("This should not be printed");
      }
    });
  });
}

window.onload = function()
{
  $("#submit").submit(function(e)
  {
    e.preventDefault();
  });

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("submit");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
    all_users = username;
    console.log(all_users);

    btn.onclick = function sumbit_info(e)
    {
      e.preventDefault();
      if(duplicate_user == true)
      {
        modal.style.display = "block";
      }
      else
      {
        // initializing objects
        var first_name = document.getElementById("first_name_input").value;
        var last_name = document.getElementById("last_name_input").value;
        var username = document.getElementById("username_input").value;
        var password = document.getElementById("password_input").value;
        var fake_password = document.getElementById("fake_password_input").value;

        var user = users.child(username);
        user.child("first_name").set(first_name);
        user.child("last_name").set(last_name);
        user.child("password").set(password);
        user.child("fake_password").set(fake_password);
        user.child("logged_in").set("false");

        window.location.replace("../login/index.html")
      }
   }
}
