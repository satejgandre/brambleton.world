document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tab-link');
    let contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(item => item.classList.remove('current'));
            contents.forEach(content => content.classList.remove('current'));

            tab.classList.add('current');
            document.getElementById(tab.dataset.tab).classList.add('current');
        });
    });
});
