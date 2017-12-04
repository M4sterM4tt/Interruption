
var notification_count = 0;


$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});




function createMessage(){
    
	// phoneGap and jQueryMobile do not support toast messages directly.
    // so we can add this using toast.js
    
    new Toast({content: 'Stop!!!   You Mad Man!!!', duration: 2000}); 	
    // new Toast({content: 'Never Mind, I was a Fool', duration: 1000}); 
    
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 3000); // delayed time  - add 1 second   
    
    cordova.plugins.notification.local.schedule({
        title: 'The Mad Man',
        text: 'You wanna Fight',
        date: 		notificationTime, 
        badge: 		notification_count++,
        actions: [
            { id: 'yes', title: 'Yes' },
            { id: 'no',  title: 'No' }
        ]
    });
}
        	


function createDialog() {

	// phonegap supports native dialog boxes.
	// here's a simple example
      
	navigator.notification.confirm(
    	'Are You Hungry?',  // message
        dialogDismissed,  // callback
        'The Classic',  // title
        ['No, But Give Me Some Food Anyway', 'Yes, Give Me Food']  // buttons
    );

}         	
function dialogDismissed(buttonIndex) {
	
	if (buttonIndex==1) {
        new Toast({content: "You know what? No.", duration: 3000});
 
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + 3000); // delayed time  - add 1 second
    			
        cordova.plugins.notification.local.schedule({ 
    	    id: 		'Yes_Notification',
            title: 		"Actually, wanna get some Chips",
            message: 	"Here is your Food, You better pay me back",
            date: 		notificationTime, 
            badge: 		notification_count++
   	    });
    }
   	else if(buttonIndex==2) {
        new Toast({content: 'Fine, but you must pay me back', duration: 3000});
        
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + 3000); // delayed time  - add 1 second
    			
        cordova.plugins.notification.local.schedule({ 
    	    id: 		'No_Notification',
            title: 		"Food",
            message: 	"Here is your Food, You better pay me back",
            date: 		notificationTime, 
            badge: 		notification_count++
   	    });
    }
    
}

  

    
function createNotification() {
        		
    //generate a time to post notification
    
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); // delayed time  - add 1 second
    			
    //setup notification
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		"Main_Notification",
        title: 		"Hey you",
        message: 	"It's Ya Boy!",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}