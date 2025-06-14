function buyStars() {
  const amount = document.getElementById("starAmount").value;
  const promoRequest = {
    type: "buy",
    stars: parseInt(amount)
  };

  Telegram.WebApp.sendData(JSON.stringify(promoRequest));
}
