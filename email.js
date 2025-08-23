document.addEventListener("DOMContentLoaded", function () {
	emailjs.init("x7xrTKExxovF-gPkj");

	document
		.getElementById("contact-form")
		.addEventListener("submit", function (e) {
			e.preventDefault();

			emailjs
				.sendForm("service_6udpv8j", "template_idwc7s7", this)
				.then(() => {
					alert("Pesan berhasil dikirim!");
					this.reset();
				})
				.catch((err) => alert("Gagal mengirim: " + JSON.stringify(err)));
		});
});
