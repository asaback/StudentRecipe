var tacoGratin = '<a href="https://www.undertian.com/recept/tacogratang-med-majstopping/">TACO GRATIN</a>';
var kaleSalad = '<a href="https://undertian.com/recept/gronkalssallad-med-dill-och-kikartor/">KALE SALAD <br> WITH DILL</a>';
var zucchiniPasta = '<a href="https://www.undertian.com/recept/kramig-zucchini-och-svamppasta/">ZUCCHINI AND <br> MUSHROOM PASTA</a>';
var broccoliSoup = '<a href= "https://www.undertian.com/recept/billig-broccolisoppa-med-picklad-rodlok/">BROCCOLI SOUP</a>';
var vegetarianLasagne = '<a href="https://www.undertian.com/recept/billig-vegetarisk-lasagne/">VEGETARIAN <br> LASANGE</a>';
var tomatoPasta = '<a href= "https://www.undertian.com/recept/snabb-tomatpasta-med-rostade-kikartor/">TOMATO PASTA</a>';
var veganBeet = '<a href= "https://www.undertian.com/recept/veganska-rodbetsbiffar/">VEGAN BEET <br> STEAKS</a>';


var randomAnswers= [
    tacoGratin,
   
    kaleSalad,

    zucchiniPasta,

    broccoliSoup,
    
    vegetarianLasagne,
    
    tomatoPasta,
    
    veganBeet,
    
    ];
    
     document.getElementById('button').onclick=function() {
        var randomAnswer = randomAnswers[Math.floor(Math.random()*randomAnswers.length)];
        document.getElementById('display').innerHTML= randomAnswer;

        if (randomAnswer=== vegetarianLasagne) {
            document.getElementById('vegetarianLasagne').style.display = "block";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";  
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== kaleSalad) {
            document.getElementById('kaleSalad').style.display = "block";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";  
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== tacoGratin) {
            document.getElementById('tacoGratin').style.display = "block";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none"; 
        }

        else if (randomAnswer=== zucchiniPasta) {
            document.getElementById('creamyPasta').style.display = "block";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== broccoliSoup) {
            document.getElementById('broccoliSoup').style.display = "block"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== tomatoPasta) {
            document.getElementById('tomatoPasta').style.display = "block";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== veganBeet) {
            document.getElementById('veganBeet').style.display = "block";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
        }

}
