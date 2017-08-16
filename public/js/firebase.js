var config = {
  apiKey: "AIzaSyDUwryOukFHoF73TFOpdiK5hNq561dsncM",
  authDomain: "hi-oscar-31e7c.firebaseapp.com",
  databaseURL: "https://hi-oscar-31e7c.firebaseio.com",
  projectId: "hi-oscar-31e7c",
  storageBucket: "",
  messagingSenderId: "545946634939"
};
firebase.initializeApp(config);

var db = firebase.database();
db.ref('metadata').set({
  app: 'hi-oscar',
  ver: '0.0.1'
});
