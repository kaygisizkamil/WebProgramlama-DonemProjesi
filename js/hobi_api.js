async function kaygisiz() {
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    const dataCollect = await response.json();

    console.log(dataCollect);

    document.querySelector("#resim1").src = dataCollect[2].img;
    document.querySelector("#resim2").src = dataCollect[4].img;
    document.querySelector("#resim3").src = dataCollect[6].img;
    document.querySelector("#resim4").src = dataCollect[8].img;
    document.querySelector("#resim5").src = dataCollect[10].img;
    document.querySelector("#resim6").src = dataCollect[12].img;
    document.getElementById('paragraf1').innerHTML=dataCollect[2].name;
    document.getElementById('paragraf2').innerHTML=dataCollect[4].name;
    document.getElementById('paragraf3').innerHTML=dataCollect[6].name;
    document.getElementById('paragraf4').innerHTML=dataCollect[8].name;
    document.getElementById('paragraf5').innerHTML=dataCollect[10].name;
    document.getElementById('paragraf6').innerHTML=dataCollect[12].name;
}
kaygisiz();