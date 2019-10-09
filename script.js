
var randomAnswers= [
    {
        name: 'TACO GRATIN',
        link: 'https://www.undertian.com/recept/tacogratang-med-majstopping/',
        image: 'tacgra.png',
        time: '60'
    },{
        name: 'KALE SALAD <br> WITH DILL',
        link: 'https://undertian.com/recept/gronkalssallad-med-dill-och-kikartor/',
        image: 'kalsal.png',
        time: '20'
    }, {
        name: 'ZUCCHINI AND <br> MUSHROOM PASTA',
        link: 'https://www.undertian.com/recept/kramig-zucchini-och-svamppasta/',
        image: 'crepas.png',
        time: '30'
    }, {
        name: 'BROCCOLI SOUP',
        link: 'https://www.undertian.com/recept/billig-broccolisoppa-med-picklad-rodlok/',
        image: 'brosou.png',
        time: '20'
    },{
        name: 'VEGETARIAN <br> LASANGE',
        link: 'https://www.undertian.com/recept/billig-vegetarisk-lasagne/',
        image: 'veglas.png',
        time: '40'
    },{
        name: 'TOMATO PASTA',
        link: 'https://www.undertian.com/recept/snabb-tomatpasta-med-rostade-kikartor/',
        image: 'tompas.png',
        time: '30'
    },{
        name: 'VEGAN BEET <br> STEAKS',
        link: 'https://www.undertian.com/recept/veganska-rodbetsbiffar/',
        image: 'vegbee.png',
        time: '20'
    } 
];
    
    function getRandomFood() {
        var randomAnswer = randomAnswers[Math.floor(Math.random()*randomAnswers.length)];
        document.getElementById('display').innerHTML= randomAnswer.name + "<br> <br>" + "TIME: " + randomAnswer.time + " MIN";
        document.getElementById('display').href = randomAnswer.link;
        document.getElementById('displayImage').href = randomAnswer.link;
        document.getElementById('recipeImage').src = randomAnswer.image

    }

    getRandomFood();

    document.getElementById('button').onclick=function() {
        getRandomFood();

    }
