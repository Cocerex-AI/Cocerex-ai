document.getElementById("cta").addEventListener("click", () => {
  document.getElementById("mesaj").hidden = false;
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.innerHTML = "<p>Teşekkürler! En kısa sürede dönüş yapacağız. ✅</p>";
});
