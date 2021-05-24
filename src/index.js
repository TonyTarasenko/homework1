document.createTabs.addEventListener('submit', function(e) {
    e.preventDefault();

    const { tab, content } = this.elements;
    const lastIndex = 1;

    if (tab.value && content.value) {
        const button = document.createElement('button');
        const tabContent = document.createElement('div');

        button.textContent = tab.value;
        tabContent.textContent = content.value;

        tabContent.classList.add('is-hidden');
        tabContent.id = tab.value;

        const section = document.createElement('section');
        section.classList.add('container');
        document.body.append(section);

        document.querySelector('section:last-of-type').append(button, tabContent);

    } else alert('Форма пустая');

    document.createTabs.reset();

    const firstIsActive = document.querySelector('div:first-of-type');
    firstIsActive.classList.add('is-active');
    firstIsActive.classList.remove('is-hidden');

    const buttons = document.querySelectorAll('.container > button');
    const indexOfLastButton = buttons.length - lastIndex;

    function showContent() {
        document.querySelectorAll('div').forEach(div => {
            div.classList.remove('is-active');
            div.classList.add('is-hidden');
        });
        const currentContent = document.getElementById(this.textContent);
        currentContent.classList.add('is-active');
    }

    buttons[indexOfLastButton].addEventListener('click', showContent);
});