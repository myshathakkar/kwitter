
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAKi5kFLNTI6pcxXHJRSQhHHuxDgI_U0TI",
      authDomain: "kwitter-3a968.firebaseapp.com",
      databaseURL: "https://kwitter-3a968-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a968",
      storageBucket: "kwitter-3a968.appspot.com",
      messagingSenderId: "657906293725",
      appId: "1:657906293725:web:55bf23672c384f6f4d3434",
      measurementId: "G-M6M2W2XHXM"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !"

function add_room() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adduser"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  //Start code
             console.log("Room names "+Room_names)
             row="<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
             document.getElementById("output").innerHTML +=row
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
      }

      function logout(){
            localStorage.removeItem("user_name")
            localStorage.removeItem("room_name")
            window.location="index.html"
      }