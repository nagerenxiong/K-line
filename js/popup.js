var bgPage = chrome.extension.getBackgroundPage();
$("#btn").click(function() {
	var id = $("#id").val();
	var zg = $("#zg").val();
	var zd = $("#zd").val();
	bgPage.getData(id,zg,zd);
})
$("#delBtn").click(function(){
	bgPage.delData();
})