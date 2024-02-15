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

  // ลูปเพื่อสุ่ม index และสร้างรูปภาพ
  for (let i = 0; i < imageUrls.length; i++) {
    // สุ่ม index ที่ไม่ซ้ำกับที่เคยเลือกไว้แล้ว
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * imageUrls.length);
      console.log(selectedIndex.includes(randomIndex));
    } while (selectedIndex.includes(randomIndex));

    // เก็บ index ที่ถูกเลือกไว้
    selectedIndex.push(randomIndex);
    // สร้างภาพ
    let img = document.createElement("img");
    img.src = imageUrls[randomIndex];
    return img;
  }
}

function Randomnum() {
  let randomNumber = Math.floor(Math.random() * 900) + 100;
  return randomNumber;
}

function RandomTable() {
  let table = document.getElementById("myTable");
  let row = table.insertRow(1);
  row.insertCell(0).appendChild(RandomImage());
  row.insertCell(1).innerHTML = RandomNumber();
  row.insertCell(2).innerHTML = Randomnum();
  row.insertCell(3);

  if (table.rows.length > 5) {
    table.deleteRow(table.rows.length - 1);
  }
}

setInterval(() => {
  RandomTable();
  RandomImage();
}, 1000);
