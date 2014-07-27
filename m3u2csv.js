$(document).ready(function () {
	var pm3u = function (s) {
		var ss = s.split('#');
		var t = "";
		for(i = 2; i < ss.length; i++) {
			var sss = ss[i].split(",");
			t += sss[1] + '\n';
		}
		$("#csv").html(t).wrap('<pre />');
	}
	$("#m3u").keypress(function (e) {
	    if (e.which === 13) {
			pm3u($("#m3u").val());			
		}
	});
	$("#process").click(function (e) {
		var text = $("textarea").val();
		pm3u(text);			
	});
	
});