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
 window.location.href='http://localhost:3000/home'; 
  }
}

function changeUser(response){
	console.log(response.picture.data.url);
	$("p.facebookLogin").remove();
}
