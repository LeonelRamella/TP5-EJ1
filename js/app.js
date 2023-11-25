document.getElementById("comenzarBtn").addEventListener("click", function() {
    // Genera un número aleatorio entre 1 y 100
    const numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log(numeroMagico);
    document.getElementById("comenzarBtn").style.display = "none";
    document.getElementById("adivinar").style.display = "block";

    document.getElementById("enviarBtn").addEventListener('click', function() {
      const numeroUsuario = parseInt(document.getElementById('numeroInput').value);

      if (numeroUsuario === numeroMagico) {
        alert("¡Felicitaciones! Has adivinado el número.");
        document.getElementById("numeroInput").disabled = true;
        document.getElementById("enviarBtn").disabled = true;
      } else if (numeroUsuario < numeroMagico) {
        alert("El número que ingresaste es menor al número aleatorio.");
      } else {
        alert("El número que ingresaste es mayor al número aleatorio.");
      }
    });
  });