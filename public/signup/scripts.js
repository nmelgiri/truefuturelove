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
console.log("hello world");
var duplicate_user = true;
var username_final;
var user = users;
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
  document.getElementById("get_chatroom").style.display="none";
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

  var btnSubmit = document.getElementById("enter");
  var my_code = document.getElementById("my_code");
  var chatrooms = database.ref().child("chatroom");
  var temp;
  var other_person;
  function setUsername(username_inputted, exists)
  {
    if(exists)
    {
      chatrooms.child(username_inputted+"/user2").set(username_final);
      user.child("primary chatroom").set(username_inputted);
      temp=chatrooms.child(username_inputted);
      temp.once("value", function(snapshot)
      {
        snapshot.forEach(function(childSnapshot)
        {
          if (childSnapshot.key === "user1")
          {
            other_person = childSnapshot.val();
          }
        });
        console.log(other_person);
        users.child(other_person + "/primary chatroom").set(username_inputted);
        window.location.replace("../login/index.html");
      });
    }
  }
  btnSubmit.onclick = function()
  {
    var potentialKey = another_code.value;
    var exists = false;
    chatrooms.once('value').then(function(snapshot)
    {
      console.log(snapshot);
      snapshot.forEach(function(childSnapshot)
      {
        if (childSnapshot.key === potentialKey)
        {
          exists = true;
        }
      });
      setUsername(potentialKey, exists);
    });
  }

  function generate_chatroom(username)
  {
    document.getElementById("get_chatroom").style.display="block";
    var my_chatroom = chatrooms.push();
    var my_chatroom_name = my_chatroom.key;
    var new_code = document.getElementById("another_code");
    console.log(my_chatroom_name);
    my_code.innerHTML=my_chatroom_name;
    my_chatroom.child("user1").set(username);
    my_chatroom.child("user2").set("");
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
        var decoy_website = document.getElementById("decoy_website_input").value;
        username_final = username;

        user = users.child(username);
        user.child("first_name").set(first_name);
        user.child("last_name").set(last_name);
        user.child("password").set(password);
        user.child("fake_password").set(fake_password);
        user.child("decoy_website").set(decoy_website);
        user.child("logged_in").set("false");

        document.getElementById("basic_info").style.display="none";

        generate_chatroom(username);
      }
   }
}
