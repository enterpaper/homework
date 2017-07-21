function processResponse() {
	if(XMLHttpReq.readState == 4) {
		if(XMLHttReq.status == 200) {
			document.getElementById("chatArea").value = XMLHttpReq.responseText;
		} else {
			window.alert("您请求的页面有异常。");
		}
	}
}