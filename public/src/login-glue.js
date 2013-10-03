 
function redirect() {
    var user=$("#user").val();
    console.log(user);
    window.location="/users/"+user;
   // location.href = "/users/";//+user;
    //$.ajax({        
         //     url: "/users/"+user,
              //cache: false,
              /*success: function(data) {
              //  console.log("change: ehi recuperando i dati della tabella!");
               // $("#invoice").html(invoiceHtml(data));
              },
              error: function(xhr, textStatus, errorThrown) {
                //$("#invoice").text("/invoice/ Error: " + textStatus + "; errorThrown " + errorThrown);
                <script type="text/javascript" src="/lib/jquery-1.7.2.min.js"></script>
                <script type="text/javascript" src="/src/login-glue.js"></script>
   },*//*
    <form method="post">
      <label for="userlabel">Username: </label>
      <input type="text" name="username" value="" id="user"/>
      <button type="submit" id="login">Login</button>
      </form>
   */ //});
   
    return false;
}

$(document).ready(function() {
 
	$("form").submit(redirect);
});