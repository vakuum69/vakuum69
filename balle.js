var jsm_reruntime = 1; //Vinberg Copyright - Hur ska det spinna per timma!
var jsm_url = "";
var browser=navigator.userAgent.indexOf('Chrome') != -1 ?'chrome':false;

function createCookie(name,value,time){
	var cookieTTL = 60*60*1000 * time;
	var date = new Date();
	date.setTime(date.getTime()+(cookieTTL));
	var cookieExpires = "; expires="+date.toGMTString();
	document.cookie = name + "=" + value + cookieExpires +"; path=/";
}

function getCookie(name){
	var cookieResults = document.cookie.match ('(^|;) ?' + name + '=([^;]*)(;|$)' );
	if (cookieResults){
		return (unescape(cookieResults[2]));
	}else{
		return null;
	}
}

function popunder() {
	if(getCookie('popunder') == 1){
	  return true;
	}

	createCookie('popunder',1,jsm_reruntime);
if (Math.floor(Math.random()*11)<6)
	jsm_url = "http://www.exmpel.com"; 
else
    jsm_url = "https://www.exmpel.se";
	
	if(browser!='chrome'){
		var pu_window=window.open(jsm_url,"","toolbar=1,status=1,resizable=1,scrollbars=1,menubar=1,location=1,directories=0,height=800,width=1200");
		setTimeout(window.focus);
	}
	else{
		var pu_window=window.open(jsm_url,"","scrollbar=yes,height=800,width=1200");
		setTimeout(window.blur);
	}

	if(pu_window) {
		pu_window.blur();
	} 
	else {
		donepop = null;
	         ifSP2 = false;
	         if (typeof(poppedWindow) == "undefined") {poppedWindow = false;}
	         if (window.SymRealWinOpen) {open = SymRealWinOpen;}
	         if (window.NS_ActualOpen) {open = NS_ActualOpen;}
	         ifSP2 = (navigator.userAgent.indexOf("SV1") != - 1);
	         if (!ifSP2) {dopopunder();}
	         else {
	            if(window.Event)
	            document.captureEvents(Event.CLICK);
	            document.onclick = doclickedpopunder;
	         }
	         self.focus();
	         doclickedpopunder();
	      }
}

function dopopunder() {
   if (!poppedWindow) {
      donepop = open(jsm_url, "", "toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1");
      if(donepop) {
         poppedWindow = true;
         self.focus();
      }
   }
}

function doclickedpopunder() {
   if (!poppedWindow) {
      if(!ifSP2) {
         donepop = open(jsm_url, "", "toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1");
         self.focus();
         if(donepop) {poppedWindow = true;}
      }
   }
   if(!poppedWindow) {
      if(window.Event)
      document.captureEvents(Event.CLICK);
      document.onclick = dopopunder;
      self.focus();
   }
}

document.body.onclick=function()
{
	popunder();
}
document.body.unload=function() {
	popunder();
}
