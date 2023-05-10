
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDkNxOfHgKOI0VCrd2bFKfybmy-o2psUes",
      authDomain: "lets-chat-web-app-60387.firebaseapp.com",
      projectId: "lets-chat-web-app-60387",
      storageBucket: "lets-chat-web-app-60387.appspot.com",
      messagingSenderId: "449382348168",
      appId: "1:449382348168:web:a386c6f5e6fc53639d763d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
