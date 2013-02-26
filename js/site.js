$(document).ready(function(){
						   
/*******************************************************
LEAVE ALL THESE ALONE - THEY ARE STANDARD
*******************************************************/
	// fixes png images for ie6.
	jQuery(document).pngFix();

	// opens anything pdf link to a new page.
	$("a[href*=.pdf]").click(function()	{
		$(this).attr({"target":"_self"});
		return false;
	});
	
	// opens a link to a new page
	$('a[rel="external"]').click( function() {
        window.open( $(this).attr('href') );
        return false;
    });
	
	
	$('input[type="text"]').addClass("idleField");
	$('input[type="text"]').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
		if (this.value == this.defaultValue){ 
			this.value = '';
		}
		if(this.value != this.defaultValue){
			this.select();
		}
	});
	$('input[type="text"]').blur(function() {
		$(this).removeClass("focusField").addClass("idleField");
		if ($.trim(this.value) == ''){
			this.value = (this.defaultValue ? this.defaultValue : '');
		}
	});
/*******************************************************
FOR THIS WEBSITE.
*******************************************************/

	// validate the contact form
	$("#contactForm").validate({
		rules: {
			fullName: "required",
			userEmail: "required",
			comment: "required"
		},
		messages: {
			fullName: "",
			userEmail: "",
			comment: ""
		}
	});
}); // END DOM

function openSendFriendPop()
{
	var linkURL = $('a[rel="send_to_friend"]').attr("href");
	window.open(linkURL,"Send to a Friend","menubar=no,width=580,height=240,toolbar=no" );
	return false;
}
function popUp(URL)
{
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=580,height=240,left = 350,top = 392');");
}


