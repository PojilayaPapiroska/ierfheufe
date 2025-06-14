let tg = window.Telegram.WebApp;

document.getElementById("sendBtn").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("amount").value);
  if (!amount || amount <= 0) {
    alert("Введите корректное число звёзд");
    return;
  }

  tg.sendData(JSON.stringify({ amount: amount }));
  document.body.innerHTML = `
    <h2 style="color:white;text-align:center;padding:20px;">
      ✅ Промокод создаётся…<br>Проверьте Telegram для завершения оплаты.
    </h2>`;
});
