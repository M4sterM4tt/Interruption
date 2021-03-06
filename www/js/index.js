
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

    
    cordova.plugins.notification.local.on("click", function() {
		createDialog();
    });
    
});



function createMessage(){
    
    new Toast({content: 'Stop!!!   You Mad Man!!!', duration: 2000}); 	
    // new Toast({content: 'Never Mind, I was a Fool', duration: 1000}); 
    
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 3000); // delayed time  - add 1 second   
    
    cordova.plugins.notification.local.schedule([
    {
        id: 		1,
        title:      'The Mad Man',
        text:       'You wanna Fight',
        date: 		notificationTime, 
        badge: 		notification_count++
    },      
    {
        id: 2,
        title: 'Chat with Mad Man',
        text: [
            { message: 'Who are you?' },
            { person: 'Mad Man', message: 'I am You, but Stronger!!!' },
            { message: 'WutFace' }
        ],
        date: 		notificationTime, 
        badge: 		notification_count++
    }]);
}
        	


function createDialog() {
 
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
    	    id: 		3,
            title: 		"Actually, wanna get some Chips",
            message: 	"Hey, are you hungry?",
            date: 		notificationTime, 
            badge: 		notification_count++
   	    });  
    }
      
            
   	else if(buttonIndex==2) {
        new Toast({content: 'Fine, but you must pay me back', duration: 3000});
        
        var currentTime = new Date().getTime(); //current time
        var notificationTime = new Date(currentTime + 3000); // delayed time  - add 1 second
    			
        cordova.plugins.notification.local.schedule({ 
    	    id: 		4,
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
    	id: 		5,
        title: 		"Hey you",
        message: 	"It's Ya Boy!",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}