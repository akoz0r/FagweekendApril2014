$(document).ready(function() {
    var $button = $("#request");
    var $token = $("#token");
    var $response = $("#response");
    var $responseOut = $("#response-out");

    $button.click(function() {
	var token = $token.val();
	$.ajax({
	    url: "/api/v1/users",
	    type: "GET",
	    dataType: "json",
	    headers: {
		"Authorization" : 'Token token="' + token + '"',
	    },
	    success: function(data, textStatus, jqXHR) {
		var users = data;
		var summary = "Found " + data.length + " users:\n";
		users.sort(function(a, b) { return a.name.localeCompare(b.name) });
		users.forEach(function(user) {
		    summary += "\n" + user.name;
		});
		$responseOut.empty();
		$responseOut.text(summary);
		$responseOut.removeClass("error").addClass("success");
                $response.show();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
		var header = "" + textStatus + " " + jqXHR.status + " " + errorThrown;
		var errorPageDom = $.parseHTML(jqXHR.responseText);
		errorPageDom = errorPageDom.filter(function (element) {
		    return element.nodeName !== "STYLE" });
		var message = $(errorPageDom).text();
		$responseOut.empty();
		$responseOut.append(header).append("\n").append(message);
		$responseOut.removeClass("success").addClass("error");
                $response.show();
	    },
	});
    });
});