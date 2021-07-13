{
    let text = document.querySelector('.appointment__footer-text-collapse');
    let btn = document.querySelector('.appointment__footer-btn');

    if(text && btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('_is-open');
            _slideToggle(text, 400);
        })
    }
}