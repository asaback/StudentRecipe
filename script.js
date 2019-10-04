var randomAnswers= [
    '<a href="https://www.undertian.com/recept/tacogratang-med-majstopping/">Taco gratin with corn topping</a>',
   
    '<a href="https://undertian.com/recept/gronkalssallad-med-dill-och-kikartor/">Kale salad with dill and chickpeas</a>',

    '<a href="https://www.undertian.com/recept/kramig-zucchini-och-svamppasta/">Creamy zucchini and mushroom pasta</a>',

    '<a href= "https://www.undertian.com/recept/billig-broccolisoppa-med-picklad-rodlok/">Broccoli soup with pickled red onion</a>',
    
    '<a href="https://www.undertian.com/recept/billig-vegetarisk-lasagne/">Vegetarian lasagne</a>',
    
    '<a href= "https://www.undertian.com/recept/snabb-tomatpasta-med-rostade-kikartor/">Tomato pasta with roasted chickpeas</a>',
    
    '<a href= "https://www.undertian.com/recept/veganska-rodbetsbiffar/">Vegan beet steaks</a>',
    
    ];
    
     document.getElementById('button').onclick=function() {
        var randomAnswer = randomAnswers[Math.floor(Math.random()*randomAnswers.length)];
        document.getElementById('display').innerHTML= randomAnswer;

        if (randomAnswer=== '<a href="https://www.undertian.com/recept/billig-vegetarisk-lasagne/">Vegetarian lasagne</a>') {
            document.getElementById('vegetarianLasagne').style.display = "block";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";  
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== '<a href="https://undertian.com/recept/gronkalssallad-med-dill-och-kikartor/">Kale salad with dill and chickpeas</a>') {
            document.getElementById('kaleSalad').style.display = "block";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";  
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== '<a href="https://www.undertian.com/recept/tacogratang-med-majstopping/">Taco gratin with corn topping</a>') {
            document.getElementById('tacoGratin').style.display = "block";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('creamyPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none"; 
        }

        else if (randomAnswer=== '<a href="https://www.undertian.com/recept/kramig-zucchini-och-svamppasta/">Creamy zucchini and mushroom pasta</a>') {
            document.getElementById('creamyPasta').style.display = "block";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== '<a href= "https://www.undertian.com/recept/billig-broccolisoppa-med-picklad-rodlok/">Broccoli soup with pickled red onion</a>') {
            document.getElementById('broccoliSoup').style.display = "block"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== '<a href= "https://www.undertian.com/recept/snabb-tomatpasta-med-rostade-kikartor/">Tomato pasta with roasted chickpeas</a>') {
            document.getElementById('tomatoPasta').style.display = "block";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
            document.getElementById('veganBeet').style.display = "none";
        }

        else if (randomAnswer=== '<a href= "https://www.undertian.com/recept/veganska-rodbetsbiffar/">Vegan beet steaks</a>') {
            document.getElementById('veganBeet').style.display = "block";
            document.getElementById('tomatoPasta').style.display = "none";
            document.getElementById('broccoliSoup').style.display = "none"; 
            document.getElementById('creamyPasta').style.display = "none";    
            document.getElementById('tacoGratin').style.display = "none";
            document.getElementById('kaleSalad').style.display = "none";
            document.getElementById('vegetarianLasagne').style.display = "none";
        }

}
