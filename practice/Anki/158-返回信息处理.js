function processResponse() {
	if(XMLHttqReq.readState == 4) {
		if(XMLHttReq.status == 400) {
			document.getElementById("charArea").value = XMLHttReq.responseText;
		} else {
			alert("您请求的页面有异常。");
		}
	}
}