function createXMLHttpRequest(){
	if(window.XMLHttpRequest) {
		XMLHttpReq = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		try {
			XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				
			}
		}
	}
}