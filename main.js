var accordion = document.getElementsByClassName("container");
var contents = document.getElementsByClassName("content");
var headers = document.getElementsByClassName("label");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

