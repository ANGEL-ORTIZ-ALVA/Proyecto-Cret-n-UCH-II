function mandarMensaje() {
  var userInput = document.getElementById("user-input");
  var chatLog = document.getElementById("chat-log");

  var mensaje = userInput.value.trim();
  if (mensaje !== "") {
    chatLog.innerHTML += "<p class='user-message'>" + mensaje + "</p>";
    userInput.value = "";
    
    // Palabras clave de violencia
    var palabrasClave = [
      "abusa", "abusaba", "abusar",
      "maltrata", "maltrataba", "maltratar",
      "agrede", "agredía", "agredir",
      "violentaba", "violentar", "violento",
      "acosaba", "acosar", "acoso",
      "amenazaba", "amenazar", "amenazante",
      "golpea", "golpeaba", "golpear", 
      "pega", "pegaba", "pegar",
      "agrede sexualmente", "agresión sexual",
      "hostiga", "hostigaba", "hostigar",
      "victimiza", "victimizaba", "victimizar",
      "intimida", "intimidaba", "intimidar",
      "coacciona", "coaccionaba", "coaccionar",
      "manipula", "manipulaba", "manipular",
      "controla", "controlaba", "controlar",
      "suicida", "suicidarse", "suicidio"
    ];
    
    var violenciaDetectada = false;
    for (var i = 0; i < palabrasClave.length; i++) {
      if (mensaje.toLowerCase().includes(palabrasClave[i])) {
        violenciaDetectada = true;
        break;
      }
    }

    if (violenciaDetectada) {
      chatLog.innerHTML += "<p class='bot-message'>Violencia detectada!</p>";
    } else if (mensaje.toUpperCase() === "HOLA") {
      chatLog.innerHTML += "<p class='bot-message'>Hola soy tu asistente de ayuda, cuéntame en qué te puedo ayudar.</p>";
    } else {
      chatLog.innerHTML += "<p class='bot-message'>Por favor cuéntame más, eres importante para mí.</p>";
    }

    // Scroll al final del registro de chat
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}