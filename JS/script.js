let cont = 0;

function inicio() {
    const pSound = document.getElementById('sound1');
    pSound.play();
}
function pausar() {
    const paSound = document.getElementById('sound1');
    paSound.pause();
}

function siguiente() {
    cont = cont + 1;
    const sounds = document.getElementsByClassName('music');
    const music = sounds[cont];
    music.click();

}

function anterior() {
    cont = cont - 1;
    const sounds = document.getElementsByClassName('music');
    const music = sounds[cont];
    music.click();

}

//Maneja el codigo principal de reproduccion

function Reproductor(url, imgURL) {
    const imagen = document.getElementById('pic');
    imagen.src = imgURL;

    const cancion = document.getElementById('sound1');
    cancion.src = url;
    cancion.play();

}