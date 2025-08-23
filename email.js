document.addEventListener("DOMContentLoaded", function () {
	emailjs.init("x7xrTKExxovF-gPkj");

	document
		.getElementById("contact-form")
		.addEventListener("submit", function (e) {
			e.preventDefault();

			emailjs
				.sendForm("service_6udpv8j", "template_idwc7s7", this)
				.then(() => {
					Swal.fire({
						icon: "success",
						title: "Pesan berhasil dikirim!",
						text: "Terima kasih, saya akan menghubungi Anda dalam 24 jam.",
						confirmButtonText: "OK",
						timer: 3000,
					});
					this.reset();
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "Gagal mengirim pesan!",
						text: "Silakan coba lagi. Error: " + err.text,
						confirmButtonText: "OK",
						timer: 3000,
					});
				});
		});
});
