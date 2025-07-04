  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data input
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // Tampilkan ke tampilan summary
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayMessage").textContent = message;

    // Reset form jika mau
    // form.reset();
  });