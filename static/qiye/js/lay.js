function downios2(url,appName, qiyeName,icon, zhengshu, barIcon) {
    if (false) {
        var winHeight = typeof window.innerHeight != "undefined" ? window.innerHeight : document.documentElement.clientHeight;
        //兼容IOS，不需要的可以去掉
        var tip = document.getElementById("weixin-tip");
        var close = document.getElementById("close");
        tip.style.height = winHeight + "px";
        //兼容IOS弹窗整屏
        tip.style.display = "block";
        close.onclick = function () {
            tip.style.display = "none";
        }
    } else {
        $('.weixin-app-download-mask').show();
        $(".install-tip-mask").show();
        $(".install-tip").animate({bottom: "0"});

	$('#appName').html(appName);
	$('#qiyeName').html(qiyeName);
	$('#jiaochengLianjie').attr('href','/static/qiye/jiaocheng.html?qiyeName=' + qiyeName + 
	"&appName=" + appName + "&appIcon=" + icon);
	$('#zhengshuLianjie').attr('href','#');
	$('#zhengshuLianjie').click(function(e){
	
		e.preventDefault();
		if (confirm("请检查是否完成安装,安装完成后点击确认"))
			window.location.href='/static/qiye/zhengshu/'+zhengshu;
	});
	$('.first-step-image').css('background-image','url(/static/qiye/bar/' + barIcon + '.png)');

        doLocation(url);
    }
}

$('.btn-close').click(function () {
    $(".install-tip-mask").hide();
    $(".install-tip").animate({bottom: "-1000px"});
});
