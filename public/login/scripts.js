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
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
  // Get a reference to the database service
  var database = firebase.database();

  var submit = document.getElementById("submit");
  var users = database.ref().child("user");
  var duplicate_user = -1;
  function username_check(this_username, childSnapshot)
  {
    console.log(this_username, childSnapshot);
    if(this_username == 1)
    {
      if(password_check(username, childSnapshot) === 1)
      {
        //normal password
        console.log("normal password");
        window.location.replace("../main_interface/index.html"+"#"+childSnapshot.key);
      }
      else if (password_check(username, childSnapshot) === 2)
      {
        // fake_password
        console.log("fake password");
        var this_username = 0;
        username = document.getElementById("username_input").value;
        users.once('value').then(function(snapshot)
        {
          var temp;
          snapshot.forEach(function(childSnapshot)
          {
            console.log(childSnapshot.child("primary chatroom").val());
          });
        });
      }
      else if (password_check(username, childSnapshot) === 0)
      {
        // Incorrect password
        console.log("wrong password");
      }
    }
    else
    {
      // This user does not exist
      console.log("user doesnt exist");
    }
  }
  function user_exists()
  {
    var this_username = 0;
    username = document.getElementById("username_input").value;
    users.once('value').then(function(snapshot)
    {
      var temp;
      snapshot.forEach(function(childSnapshot)
      {
        temp = childSnapshot;
        if (childSnapshot.key === username)
        {
          this_username = 1;
        }
      });
      username_check(this_username, temp);
    });
  }
  function password_check(username, childSnapshot)
  {
    var input = document.getElementById("password_input").value;
    var password = childSnapshot.child("password").val();
    var fake_password = childSnapshot.child("fake_password").val();
    console.log("input: " + input);
    console.log(password + "; " + fake_password);
    if (input === password)
    {
      return 1;
    }
    else if (input === fake_password)
    {
      return 2;
    }
    else
    {
      return 0;
    }
  }

  var username = document.getElementById("username_input").value;
  submit.onclick = function(e)
  {
    e.preventDefault();
    user_exists();
  }
}
