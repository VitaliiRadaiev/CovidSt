{
    let rating = document.querySelector('.rating__stars');
    if(rating) {
        let value = rating.dataset.value * 10;
        let progress = rating.querySelector('.rating__progress');
        progress.style.width = value + '%';
    }
}