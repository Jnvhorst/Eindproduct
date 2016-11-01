var filterbutton = document.querySelector('#Fbutton');
var filtercontent = document.querySelector('#Fcontent');
var sorteerbutton = document.querySelector('#Sbutton');
var sorteercontent = document.querySelector('#Scontent');
var likebutton = document.querySelectorAll('.like');

filtercontent.classList.add('hidden');
filterbutton.addEventListener("click", function () {
    sorteercontent.classList.add('hidden');
    filtercontent.classList.toggle('hidden');
    document.querySelector('i').classList.toggle('fa-chevron-down');
    document.querySelector('i').classList.add('fa-chevron-up');
    document.querySelector('#Sbutton i').classList.toggle('fa-chevron-up');
    document.querySelector('#Sbutton i').classList.add('fa-chevron-down');
});


sorteercontent.classList.add('hidden');
sorteerbutton.addEventListener("click", function () {
    filtercontent.classList.add('hidden');
    sorteercontent.classList.toggle('hidden');
    document.querySelector('#Sbutton i').classList.toggle('fa-chevron-down');
    document.querySelector('#Sbutton i').classList.add('fa-chevron-up');
    document.querySelector('i').classList.toggle('fa-chevron-up');
    document.querySelector('i').classList.add('fa-chevron-down');
});

var i;
for (i = 0; i < likebutton.length; i++) {
    likebutton[i].addEventListener("click", function (e) {
        if (this.checked) {
            this.classList.toggle('fa-thumps-o-up');
            this.classList.add('fa-thumbs-up');
        } else {
            this.classList.add('fa-thumps-o-up');
            this.classList.toggle('fa-thumbs-up');
        }

    });
};
