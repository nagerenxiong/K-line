function getData(id, zg, zd) {
	// sz000825
	if(id==""||zg==""||zd=="")
	{
		alert("数据不能为空");
		return;
	}
	var timer=setInterval(function() {
		if(timer>1)
		{
			clearInterval(timer)
			return;
		}
		$.ajax({
			type: "post",
			url: "http://hq.sinajs.cn/list=" + id,
			success: function(data) {},
			error: function(msg) {
				var str = msg.responseText;
				var strArray = str.split(",");
				var curretPrice = strArray[3];
				if (zg * 1 < curretPrice * 1 || zd * 1 > curretPrice * 1) {
					alert("价格超过范围了")
				}
			}
		})
			return timer;
	}, 6000);
}
