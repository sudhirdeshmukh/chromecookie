var checkedValue = null; 
var cookies = document.getElementsByName('cookies');
var mybutton = document.getElementById("mybutton");
var div = document.getElementById("div");

mybutton.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		for(var i=0; cookies[i]; ++i){
		checkedValue = cookies[i].value;
		  if(cookies[i].checked){ 
			 chrome.tabs.executeScript( tabs[0].id, {code: 'document.cookie = " ' + checkedValue + ' = 1"'});
		  }else{
			 chrome.tabs.executeScript( tabs[0].id, {code: 'document.cookie = " ' + checkedValue + ' = 0"'});
		  }
		}  
	});
}