var button = document.querySelectorAll("img");
var result_item = document.querySelector(".actualresult");
var winner = document.querySelector(".win");
var c_count = document.querySelector(".computer_counter");
var p_count = document.querySelector(".player_counter");
let count1 = 0;
let count2 = 0;
c_count.innerHTML = count1;
p_count.innerHTML = count2;
button.forEach((bt) => {
  bt.addEventListener("click", function () {
    computer_choice = Math.floor(Math.random() * 3) + 1;
    switch (computer_choice) {
      case 1:
        result_item.textContent = "Rock";
        break;

      case 2:
        result_item.textContent = "Paper";
        break;

      case 3:
        result_item.textContent = "Scissor";
        break;
    }
    console.log(bt.dataset.value);
    console.log(computer_choice);
    if (computer_choice == bt.dataset.value) {
      winner.textContent = "Its a Tie!";
    } else if (computer_choice == 1) {
      if (bt.dataset.value == 2) {
        winner.textContent = "You Win!";
        p_count.innerHTML = ++count2;
      } else {
        winner.textContent = "Computer Wins!";
        c_count.innerHTML = ++count1;
      }
    } else if (computer_choice == 2) {
      if (bt.dataset.value == 1) {
        winner.textContent = "Computer Wins!";
        c_count.innerHTML = ++count1;
      } else {
        winner.textContent = "You Win!";
        p_count.innerHTML = ++count2;
      }
    } else {
      if (bt.dataset.value == 1) {
        winner.textContent = "You Win!";
        p_count.innerHTML = ++count2;
      } else {
        winner.textContent = "Computer Wins!";
        c_count.innerHTML = ++count1;
      }
    }
  });
});
