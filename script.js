let tg = window.Telegram.WebApp;

document.getElementById("sendBtn").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("amount").value);
  if (!amount || amount <= 0) {
    alert("❗ Введите положительное число звёзд");
    return;
  }

  tg.sendData(JSON.stringify({ amount }));
  document.body.innerHTML = `
    <div style="text-align:center; padding:30px;">
      <h2 style="color:#00cc99;">✅ Промокод создаётся…</h2>
      <p style="color:#ccc;">Проверьте Telegram для подтверждения оплаты</p>
    </div>`;
});
