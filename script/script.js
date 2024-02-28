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
      // console.log(selectedIndex.includes(randomIndex));
    } while (selectedIndex.includes(randomIndex));

    // เก็บ index ที่ถูกเลือกไว้
    selectedIndex.push(randomIndex);
    // สร้างภาพ
    let img = document.createElement("img");
    img.src = imageUrls[randomIndex];
    return img;
  }
}

function RandomDeposit() {
  var min = 100;
  var max = 100000;

  // คำนวณจำนวนของตัวเลขที่มีทั้งหมด
  var numberOfValues = Math.floor((max - min) / 100) + 1;

  // สุ่มตัวเลข
  var randomNumber = min + Math.floor(Math.random() * numberOfValues) * 100
  return randomNumber;
}

function RandomWithdraw() {
  var min = 100;
  var max = 100000;

  // คำนวณจำนวนของตัวเลขที่มีทั้งหมด
  var numberOfValues = Math.floor((max - min) / 100) + 1;

  // สุ่มตัวเลข
  var randomNumber = min + Math.floor(Math.random() * numberOfValues) * 100
  return randomNumber;
}

console.log(900 > 1300)


function RandomTable() {
  let table = document.getElementById("myTable");
  let row = table.insertRow(1);

  row.insertCell(0).appendChild(RandomImage());
  row.insertCell(1).innerHTML = RandomNumber().toLocaleString();
  let  Deposit = row.insertCell(2).innerHTML = RandomDeposit().toLocaleString();
  let  Withdraw = row.insertCell(3).innerHTML = RandomWithdraw().toLocaleString()

  if(Withdraw.replace(/,/g, '') > Deposit.replace(/,/g, '')){
    console.log(Deposit.replace(/,/g, '') , Withdraw.replace(/,/g, '') , Deposit.replace(/,/g, '') > Withdraw.replace(/,/g, ''))
    row.cells[3].innerHTML = "+฿" + Withdraw;
    row.cells[3].style.color = "#FF0000";
  }else{
    console.log(Deposit.replace(/,/g, '') , Withdraw.replace(/,/g, '') ,Deposit.replace(/,/g, '') > Withdraw.replace(/,/g, '') )
    row.cells[3].innerHTML = "-฿" + Deposit;
    row.cells[3].style.color = "#00FF00";
  }
  
  if (table.rows.length > 5) {
    table.deleteRow(table.rows.length - 1);
  }
}

setInterval(() => {
  RandomTable();
  RandomImage();
}, 5000);


        // // Function to generate a random letter from A to Z
        // function getRandomLetter() {
        //     var letters = "abcdefghijklmnopqrstuvwxyz";
        //     var randomIndex = Math.floor(Math.random() * letters.length);
        //     return letters.charAt(randomIndex);
        // }

        // // Function to generate a random number between min and max (inclusive)
        // function getRandomNumber(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        // }

        // // Function to add a new row to the table
        // function addRow(table) {
        //     // Generate random values for the row
        //     var number = table.rows.length + 1;

        //     // Array to store image elements
        //     var imageElements = [];

        //     // Array of image URLs
        //     var imageUrls = [
        //         "https://files.88th.link/logo-winrate/Allbet-GAMING.png",
        //         "https://files.88th.link/logo-winrate/BG-GAMING.png",
        //         "https://files.88th.link/logo-winrate/DREAM-GAMING.png",
        //         "https://files.88th.link/logo-winrate/PRETTY-GAMING.png",
        //         "https://files.88th.link/logo-winrate/Sexy-GAMING.png"
        //     ];
        //     // Number of random images to generate
        //     var numImages = 1;

        //     // Generate random image elements
        //     for (var i = 0; i < numImages; i++) {
        //         // Generate a random index to select a random image URL
        //         var randomIndex = Math.floor(Math.random() * imageUrls.length);

        //         // Create a new image element
        //         var img = new Image();

        //         // Set the source attribute of the image element
        //         img.src = imageUrls[randomIndex];

        //         // Push the image element to the array
        //         imageElements.push(img);

        //         // Append the image element to the userCell
        //     }

        //     // user
        //     var alphanumeric = "";
        //     for (var i = 0; i < 9; i++) { //เลข 9 คือข้อมูลที่ต้องการให้แสดงสุ่ม
        //         if (Math.random() < 0.5) {
        //             alphanumeric += getRandomNumber(0, 9); // Generate a random number
        //         } else {
        //             alphanumeric += getRandomLetter(); // Generate a random letter
        //         }
        //     }
        //     var user = "gb888" + alphanumeric;

        //     // tatal credit
        //     var total = "฿" + getRandomNumber(100, 999);
        //     var formattedTotal = parseFloat(total.replace("฿", "")).toLocaleString();

        //     // tatal credit
        //     var totalbigLose = "฿" + getRandomNumber(20, 999);
        //     var formattedBigLose = parseFloat(totalbigLose.replace("฿", "")).toLocaleString();

        //     // win
        //     var winlose = "+฿" + getRandomNumber(50, 599) + "0";
        //     var formattedWinlose = parseFloat(winlose.replace("+฿", "")).toLocaleString();
        //     // bigwin
        //     var bigwin = "+฿" + getRandomNumber(10000, 50000) + "0"; 
        //     var formattedBigwin = parseFloat(bigwin.replace("+฿", "")).toLocaleString();

        //     // lose
        //     var lose = "-฿" + getRandomNumber(10, 1500) + "0";
        //     var formattedLose = parseFloat(lose.replace("-฿", "")).toLocaleString();

        //     // Insert a new row at the top of the table
        //     var newRow = table.insertRow(1);

        //     // Insert cells with the generated values

        //     // Array of image URLs
        //     var numImages = 1;

        //     // Generate random image elements
        //     for (var i = 0; i < numImages; i++) {
        //         // Generate a random index to select a random image URL
        //         var randomIndex = Math.floor(Math.random() * imageUrls.length);

        //         // Set the source attribute of the image element
        //         img.src = imageUrls[randomIndex];

        //         // Append the image element to the userCell
        //         newRow.insertCell(i).appendChild(img);
        //     }

        //     newRow.insertCell(numImages).textContent = user;
        //     newRow.insertCell(numImages + 1).textContent = " ชนะ " + formattedTotal + " / " + " แพ้ " + formattedBigLose;
        //     // Insert cells with the generated values
        //     var randomPercentage = Math.random();

        //     if (randomPercentage < 0.6) {
        //         // 60% chance for formattedWinlose
        //         newRow.insertCell(numImages + 2).textContent = "+฿" + formattedWinlose;
        //         newRow.cells[numImages + 2].style.color = "#00FF00"; // Set text color to green
        //     } else if (randomPercentage < 0.8) {
        //         // 20% chance for formattedBigwin
        //         newRow.insertCell(numImages + 2).textContent = "+฿" + formattedBigwin;
        //         newRow.cells[numImages + 2].style.color = "#00FF00"; // Set text color to green
        //     } else {
        //         // 20% chance for formattedLose
        //         newRow.insertCell(numImages + 2).textContent = "-฿" + formattedLose;
        //         newRow.cells[numImages + 2].style.color = "#FF0000"; // Set text color to red
        //     }

        //     // Remove the latest row if the table exceeds 10 rows
        //     if (table.rows.length > 5) {
        //         table.deleteRow(table.rows.length - 1);
        //     }
        // }

        // // Function to start the timer for adding new rows
        // function startTimer(table) {
        //     // Add the first row immediately
        //     addRow(table);

        //     // Schedule adding a new row every 5 minutes
        //     setInterval(function () {
        //         addRow(table);
        //     }, 1 * 1000); // 5 minutes in milliseconds
        // }

        // // Get the table element by its ID
        // var table = document.getElementById("myTable");

        // // Start the timer to add rows
        // startTimer(table);
