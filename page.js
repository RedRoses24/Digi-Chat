function next(){
    username=document.getElementById("name").value;
    localStorage.setItem("username", username);
    window.location="page2.html";
}
function log_out(){
    window.location="index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyBgd28WGpxAK6JKVXqcrQ8M_M6NcFpT-Z0",
    authDomain: "digichat-ff0ad.firebaseapp.com",
    databaseURL: "https://digichat-ff0ad-default-rtdb.firebaseio.com",
    projectId: "digichat-ff0ad",
    storageBucket: "digichat-ff0ad.appspot.com",
    messagingSenderId: "1045389185893",
    appId: "1:1045389185893:web:7cc4fee4fb4ac8a5f7478c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);