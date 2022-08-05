function buy() {
  let name = prompt("What is your name?");
  let phone = prompt("What is your phone number?");
  let country = prompt("What country are you from?");
  country = country.toLowerCase();
  country = country.trim();

  if (country === "ukraine") {
    alert(
      `Thank you, ${name}! Our manager will call you shortly to place your order!`
    );
  } else {
    alert(
      `Thank you, ${name}! Our manager will send you a massage to Telegram shortly to place your order!`
    );
  }
}

let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buy);
