const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const btnOpenList = document.querySelectorAll(".btn-open");
const btnClose = document.getElementById("closeModal");
const btnEnviar = document.querySelector(".btn-enviar");
const inputEmail = document.getElementById("email");

// === ABRIR MODAL ===
btnOpenList.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    // animación
    setTimeout(() => modal.classList.add("show"), 10);
  });
});

// === CERRAR MODAL ===
function cerrarModal() {
  modal.classList.remove("show");

  setTimeout(() => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 200);
}

btnClose.addEventListener("click", cerrarModal);
overlay.addEventListener("click", cerrarModal);

// === VALIDAR Y ENVIAR ===
btnEnviar.addEventListener("click", () => {
  const email = inputEmail.value.trim();

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    alert("Ingresa un correo válido.");
    return;
  }

  alert("¡Gracias por suscribirte!");

  inputEmail.value = "";
  cerrarModal();
});
