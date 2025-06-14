let tg = window.Telegram.WebApp;

document.getElementById("redeemBtn").addEventListener("click", () => {
  const code = document.getElementById("codeInput").value.trim();
  if (!code) {
    alert("Введите промокод");
    return;
  }

  tg.sendData(JSON.stringify({ redeem: code }));
  document.body.innerHTML = `<h2 style="color:white">🔄 Проверка кода... Смотрите Telegram.</h2>`;
});
