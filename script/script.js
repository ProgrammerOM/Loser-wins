// let table = document.getElementById("myTable");

// function RandomNumber() {
//   let characters = "0123456789";
//   let result = Math.floor(Math.random() * characters);
//   return "goat69" + result.toString();
// }

// function RandomImage() {
//   let imageUrls = [
//     "https://files.88th.link/logo-winrate/Allbet-GAMING.png",
//     "https://files.88th.link/logo-winrate/BG-GAMING.png",
//     "https://files.88th.link/logo-winrate/DREAM-GAMING.png",
//     "https://files.88th.link/logo-winrate/PRETTY-GAMING.png",
//     "https://files.88th.link/logo-winrate/Sexy-GAMING.png",
//   ];

//   let selectedIndex = [];

//   // ลูปเพื่อสุ่ม index และสร้างรูปภาพ
//   for (let i = 0; i < imageUrls.length; i++) {
//     // สุ่ม index ที่ไม่ซ้ำกับที่เคยเลือกไว้แล้ว
//     let randomIndex;
//     do {
//       randomIndex = Math.floor(Math.random() * imageUrls.length);
//       // console.log(selectedIndex.includes(randomIndex));
//     } while (selectedIndex.includes(randomIndex));

//     // เก็บ index ที่ถูกเลือกไว้
//     selectedIndex.push(randomIndex);
//     // สร้างภาพ
//     let img = document.createElement("img");
//     img.src = imageUrls[randomIndex];
//     return img;
//   }
// }

// function getRandomUniqueNumber(min, max, step) {
//   // สร้างอาร์เรย์ของตัวเลขทั้งหมดในช่วง
//   let allNumbers = [];
//   console.log(allNumbers)
//   for (let i = min; i <= max; i += step) {
//       allNumbers.push(i);
//   }

//   // Fisher-Yates shuffle algorithm
//   for (let i = allNumbers.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//       let temp = allNumbers[i];
//       allNumbers[i] = allNumbers[j];
//       allNumbers[j] = temp;
//   }

//   // สุ่มตัวเลขแรกในอาร์เรย์
//   let randomNumber = allNumbers[0];

//   return randomNumber
// }



// function RandomTable() {
//   let table = document.getElementById("myTable");
//   let row = table.insertRow(1);

//   row.insertCell(0).appendChild(RandomImage());
//   row.insertCell(1).innerHTML = RandomNumber().toLocaleString();
//   let  Deposit = row.insertCell(2).innerHTML = getRandomUniqueNumber(100,10000,100).toLocaleString();
//   let  Withdraw = row.insertCell(3).innerHTML = getRandomUniqueNumber(1000,100000,1000).toLocaleString();

//   if(Withdraw.replace(/,/g, '') > Deposit.replace(/,/g, '')){
//     console.log(Deposit.replace(/,/g, '') , Withdraw.replace(/,/g, '') , Deposit.replace(/,/g, '') > Withdraw.replace(/,/g, ''))
//     // row.cells[3].innerHTML = "+฿" + Deposit
//     row.cells[3].style.color = "#FF0000";
//   }else{
//     console.log(Deposit.replace(/,/g, '') , Withdraw.replace(/,/g, '') ,Deposit.replace(/,/g, '') > Withdraw.replace(/,/g, '') )
//     // row.cells[3].innerHTML = "-฿" + Withdraw;
//     row.cells[3].style.color = "#FF0000";
//   }
  
//   if (table.rows.length > 5) {
//     table.deleteRow(table.rows.length - 1);
//   }
// }

// setInterval(() => {
//   RandomTable();
//   RandomImage();
// }, 5000);


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
  let Withdraw = getRandomUniqueNumber(100, 10000, 100);

  row.insertCell(2).innerHTML = Deposit.toLocaleString();

  let cell = row.insertCell(3);
  let difference = Withdraw > Deposit;


  if (difference) {
    cell.innerHTML = "+฿" + Withdraw.toLocaleString();
    cell.style.color = "#00FF00"; // Green for positive difference
  } else if(!difference) {
    cell.innerHTML = "-฿" + Math.abs(Deposit).toLocaleString();
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
}, 5000);
