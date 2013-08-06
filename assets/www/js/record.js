 
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	 // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);


}

//function gotFS(fileSystem) {
//    var reader = fileSystem.root.createReader();
//    reader.readEntries(gotList, fail);
//}
//
//function gotList(entries) {
//    var i;
//    for (i=0; i<entries.length; i++) {
//        if (entries[i].name.indexOf(".wav") != -1) {
//            console.log(entries[i].fullPath);
//        }
//    }

 function playAudio() {
	 
//	   var src = "/android_asset/www/beep.wav";
       mediaRec = new Media(src, onSuccess, onError);
       mediaRec.play();
      
       
	
}
 
 // Record audio
    // 

 //var mediaRec ;
 var src = "/mnt/sdcard/myrecording.wav";
 var   mediaRec=null;
 var mediaTimer = null;

 
    function recordAudio() {
       
     mediaRec = new Media(src, onSuccess, onError);

        mediaRec.startRecord();
        console.log("Start recording");

    }
    function stopRecordAudio() {
        console.log("stop recording");
         mediaRec.stopRecord();
 


       }
  

    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback 
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }

 


    $(document).ready(function() {
    	
//    	$(".ui-grid-a").hide();

    	$("#playBtn").bind("vclick", function(event) {

    		 playAudio();  
    		
	});
    	
      	$("#recordBtn").bind("vclick", function(event) {

      		recordAudio();
   		
	});
      	$("#stopBtn").bind("vclick", function(event) {

//      		 stopRecordAudio();
      		$(".ui-grid-a").dialog;
   		
	});
    	$("#addFiles").bind("vclick", function(event) {
    		alert("hello addfiles");

        $("#files-list").append('<li> hello </li>');
        $("#files-list").listview("refresh");
        
	});
});


