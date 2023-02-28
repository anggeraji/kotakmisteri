function generateRandomText() {
  var words = ["VCS", "mie gacoan", "VCS", "Main tiap hari", "Ayam geprek","VCS","main tiap hati","jatah nambah"];
  
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  
  var box = event.currentTarget;
  var randomText = box.querySelector("p");
  randomText.innerHTML = '<a href="https://wa.me/6281234567890?text=' + randomWord + '">' + randomWord + '</a>';
}
