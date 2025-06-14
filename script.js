let tg = window.Telegram.WebApp;

document.getElementById("sendBtn").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("amount").value);
  if (!amount || amount <= 0) {
    alert("Введите корректное число звёзд");
    return;
  }

  tg.sendData(JSON.stringify({ amount }));  // передаём в бот
  document.body.innerHTML = `<h2 style="color:white">✅ Промокод формируется. Смотрите в Telegram.</h2>`;
});
