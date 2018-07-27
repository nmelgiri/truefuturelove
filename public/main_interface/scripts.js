function activate_modal()
{
  var modal = document.getElementsByName("modal")[0];

}

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
  // Create a storage reference from our storage service
  var storageRef = storage.ref();
}
