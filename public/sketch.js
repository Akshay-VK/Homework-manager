// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDBW5V_ATwYab_5u38GDWq32x-Zm91hdOg",
    authDomain: "homework-manager-app-703041.firebaseapp.com",
    projectId: "homework-manager-app-703041",
    storageBucket: "homework-manager-app-703041.appspot.com",
    messagingSenderId: "372453776503",
    appId: "1:372453776503:web:9d4cef1910f36a934c7a72",
    measurementId: "G-V5PRHPL28P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();
  database.ref('test').push({"test":"test"});