function processRequest() {
	if(XMLHttpReq.readyState == 4) {
		if(XMLHttpReq.status == 200) {
			document.getElementById("chatArea").value = XMLHttpReq.responseText;
		}else {
			alert("您请求的页面有异常。");
		}
	}
}