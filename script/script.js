let table = document.getElementById("myTable");

function RandomNumber() {
  let characters = "0123456789";
  let result = Math.floor(Math.random() * characters);
  return "goat69" + result.toString();
}

function RandomImage() {
  let imageUrls = [
    "https://files.88th.link/logo-winrate/Allbet-GAMING.png",
    "https://files.88th.link/logo-winrate/BG-GAMING.png",
    "https://files.88th.link/logo-winrate/DREAM-GAMING.png",
    "https://files.88th.link/logo-winrate/PRETTY-GAMING.png",
    "https://files.88th.link/logo-winrate/Sexy-GAMING.png",
  ];

  let selectedIndex = [];

  // Loop to randomly select index and create an image
  for (let i = 0; i < imageUrls.length; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * imageUrls.length);
    } while (selectedIndex.includes(randomIndex));

    selectedIndex.push(randomIndex);

    let img = document.createElement("img");
    img.src = imageUrls[randomIndex];
    return img;
  }
}

function getRandomUniqueNumber(min, max, step) {
  let allNumbers = [];

  for (let i = min; i <= max; i += step) {
    allNumbers.push(i);
  }

  // Fisher-Yates shuffle algorithm
  for (let i = allNumbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = allNumbers[i];
    allNumbers[i] = allNumbers[j];
    allNumbers[j] = temp;
  }

  // Randomly select the first number in the array
  let randomNumber = allNumbers[0];

  return randomNumber;
}

function RandomTable() {
  let row = table.insertRow(1);

  row.insertCell(0).appendChild(RandomImage());
  row.insertCell(1).innerHTML = RandomNumber().toLocaleString();


  let Deposit = getRandomUniqueNumber(100, 10000, 100);
  let Withdraw = getRandomUniqueNumber(100, 10000, 999);

  row.insertCell(2).innerHTML = Deposit.toLocaleString();

  let cell = row.insertCell(3);
  let difference = Withdraw > Deposit;


  if (difference) {
    cell.innerHTML = "กำไร ฿" + Withdraw.toLocaleString();
    cell.style.color = "#00FF00"; // Green for positive difference
  } else if(!difference) {
    cell.innerHTML = "ขาดทุน ฿" + Math.abs(Withdraw).toLocaleString();
    cell.style.color = "#FF0000"; // Red for negative difference
  } else {
    cell.innerHTML = "฿" + difference.toLocaleString();
    cell.style.color = "#000000"; // Black for zero difference
  }

  if (table.rows.length > 5) {
    table.deleteRow(table.rows.length - 1);
  }
}

setInterval(() => {
  RandomTable();
}, 8000);
