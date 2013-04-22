/*var hostname = document.location.hostname
switch(hostname) {
	case 'imgur.com':
		var imgary = []
		$('.album-image img').each(function(index, value){
			imgary.push(value.src);
		});

		if (imgary.length === 0){
			imgary.push($('#image img').attr("src"));
		}
		alert(imgary);
		break;

	case 'i.imgur.com':
		var $img = $('img').src.replace("?1","");
		alert($img);
		break;

	case 'www.reddit.com':
		var $image = $('.last-clicked .thumbnail').attr('href')
		if (/\.(jpg|png|gif)/.test($image)) { 
			alert("Valid Image: " + $image);
		}
		else {
			if (/http:\/\/imgur.com/.test($image)){
				alert("Please Velocilink me from within the imgur page");
			}
			else {
				alert("Not a valid image: " + $image);
			}
		}
		break;

	default:
		alert("Site not supported!");
}*/

chrome.tabs.getSelected(null, function(tab) {
	chrome.pageAction.show(tab.id);
});