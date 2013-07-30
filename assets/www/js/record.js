

$(document).ready(function() {
	
$(".record").bind ("vclick", function (event)
{
	
	var options = { limit: 3, duration: 10 };

	navigator.device.capture.captureAudio(captureSuccess, captureError, options);

});
});