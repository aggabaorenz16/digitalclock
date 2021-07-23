const clickme = document.querySelector('#name');

clickme.addEventListener('click', (e) => {
    for (let $i = 0; $i < Infinity; $i++) {
        window.alert("Number : " + `${$i}`)
    }
})