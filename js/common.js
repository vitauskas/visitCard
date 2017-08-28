$(document).ready(function() {

	$("#top_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо. Ваше письмо отправлено!");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});