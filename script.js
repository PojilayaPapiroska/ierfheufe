const tg = window.Telegram.WebApp;
document.getElementById("sendBtn").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("amount").value);
  if (!amount || amount <= 0) {
    alert("Введите корректное число");
    return;
  }
  tg.sendData(JSON.stringify({ amount }));
  tg.close();
});
