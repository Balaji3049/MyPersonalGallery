var username="";
function ai(message)
{
 if(username.length<1)
 {
  username=message; 
  send_message("Nice to meet you " + username + " how are you doing");
 }
 if(message.indexOf("how are you")>=0)
 {
	 send_message("Thanks, I am good");
 }
}

function send_message(message)
{
 var prevmsg=$("#container").html();
 if(prevmsg.length > 1)
 {
  prevmsg=prevmsg+"<br>";
 }
 $("#container").html(prevmsg +"<span class='current_message'>"+ "<span class='chatbot'>Chatbot:</span>" + message +"</span>");	
 $(".current_message").hide();
 $(".current_message").delay(500).fadeIn();
 $(".current_message").removeClass("current_message");
 }
function get_username()
{
 send_message("Hello, what is your name");
}
$(function()
{
  get_username();
 $("#textbox").keypress(function(event)
  {
   if(event.which==13) 
   {
    if($("#enter").prop("checked"))
	{
	 $("#submit").click();
	 event.preventDefault();
	}
   }
  });
  
  $("#submit").click(function()
  {
   var username="<span class='username'>You:</span>";
   var newmsg=$("#textbox").val();
   var prevmsg=$("#container").html();
   if(prevmsg.length > 1)
   {
    prevmsg=prevmsg+"<br>";
   }
   $("#container").html(prevmsg + username + newmsg);
   $("#textbox").val("");
   $("#container").scrollTop($("#container").prop("scrollHeight"));
   ai(newmsg);
  });
});