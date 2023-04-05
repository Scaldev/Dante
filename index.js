const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let page = 0;

console.log(canvas)

let contenu = {
    0: {
        "titre": "Il viaggio di Dante",
        "dimensions": [canvas.width - 325, 200, 204, 348],
        "vers": [],
        "degrades": "rgb(175, 119, 87), rgb(77, 43, 50)",
    },
    1: {
        "titre": "Il inferno",
        "dimensions": [canvas.width - 450, 175, 384, 384],
        "vers": ["Composto di sofferenza, l'inferno", "Dove il contrappasso è presente", "Dove Lucifero regna sovrano."],
        "degrades": "rgb(207, 71, 60), rgb(65, 29, 49)",
    },
    2: {
        "titre": "Il purgatorio",
        "dimensions": [canvas.width - 450, 175, 384, 384],
        "vers": ["Poi le punizioni sono fatte,", "Collina liscia come la seta,", "e le anime sono sopraffatte."],
        "degrades": "rgb(70, 150, 50), rgb(25, 51, 45)",
    },
    3: {
        "titre": "Il paradiso",
        "dimensions": [canvas.width - 450, 175, 384, 384],
        "vers": ["Poi Beatrice guida il poeta.", "Lì vivono gli uomini buoni,", "concludendo la commedia all'età..."],
        "degrades": "rgb(115, 190, 211), rgb(37, 58, 94)",
    },
    4: {
        "titre": "La fine del viaggio",
        "dimensions": [],
        "vers": ["", "...divina.", ""],
        "degrades": "rgb(222, 158, 65), rgb(96, 44, 44)",
    }
}

// TITLE #####################################################################

ctx.fillStyle = "white";

function afficher(page) {

    // Titre
    ctx.textAlign = 'center';
    ctx.font = "bold 128px Goudy Old Style";
    ctx.fillText(contenu[page].titre, canvas.width / 2, 150);

    // Strophe
    ctx.textAlign = 'left';
    ctx.font = "64px Goudy Old Style";
    for (let l in contenu[page].vers) {
        ctx.fillText(contenu[page].vers[l], 100, 275 + 150 * l);
    }

    // Image
    let newImage = new Image();
    newImage.src = `./images/page_${page}.png`;
    newImage.onload = () => { ctx.drawImage(newImage, ...contenu[page].dimensions); };

    // Fond
    canvas.style.background = `linear-gradient(to bottom, ${contenu[page].degrades})`;
}

afficher(page);

let button = document.getElementById('button');
button.addEventListener('click', function handleClick() {

    page = page >= Object.keys(contenu).length - 1 ? 0 : page + 1;
    if (page == 0) button.textContent = "Iniziare";
    if (page > 0) button.textContent = "Continuare";
    if (page == 4) button.textContent = "Ricominciare";
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    afficher(page);

});