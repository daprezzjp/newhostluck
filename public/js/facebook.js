function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
}
function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
var str1 = "http://localhost:3000/home/";
var str2 = response.id.toString();
var res = str1.concat(str2);

window.location.href=res; 

}
