(function () {
  const popupStyles = `
    #popupNotification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      border: 1px solid #ccc;
      padding: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      font-family: sans-serif;
      max-width: 300px;
    }
    #popupNotification h3 {
      margin-top: 0;
    }
    #popupNotification button {
      margin-top: 10px;
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = popupStyles;
  document.head.appendChild(styleTag);

  const url = 'https://pt-api.digit-a.net/api/keys/create-iv-key-random'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const popup = document.createElement("div");
      popup.id = "popupNotification";
      popup.innerHTML = `
        <h3>Notificación</h3>
        <p>${data?.mensaje || "No hay mensaje disponible"}</p>
        <button onclick="this.parentElement.remove()">Cerrar</button>
      `;
      document.body.appendChild(popup);
    })
    .catch(err => {
      console.error("Error cargando notificación:", err);
    });
})();
