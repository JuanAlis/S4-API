const broma = document.getElementById("broma");
const laMeteo = document.getElementById("laMeteo");
let currentScore: number | null = null;
let jokeData: Datos | null = null;
const jokesArray: Datos[] = [];

class Datos{
    jokeName :string;
    score: number | null;
    time: string
    constructor(jokeName: string, score: number | null, time:string) {
        this.jokeName = jokeName;
        this.score = score;
        this.time = time;
    }

    setScore(newScore: number): void{
        if(newScore >= 1 && newScore <= 3){
            this.score = newScore;
        } else {
            console.log("Invalid score")
        }
    }

    toString(){
        return "Jokes Name: "+ "\n" + this.jokeName +"\n"+"Score: "+ "\n" + this.score+"\n"+"Date: "+"\n"+this.time;
    }
}

    //Llamada a la API a traves de Button
const callApi = async () =>{
    const response =await fetch("https://icanhazdadjoke.com/", {

        method:"GET",

        headers: {

            "Accept": "application/json"
        }
    });
    /*.then((res) => res.json())
    .then((data) => {

        const dadJoke = data.joke;
        console.log(dadJoke);*/
        const data = await response.json();
        const dadJoke = data.joke;
        

        if(dadJoke.length > 120){
            console.log("Broma demasido larga")
            callApi();
        } else{
            console.log("Broma aceptada")
            console.log(dadJoke,"Dad");
            broma.innerHTML = dadJoke;
        }

        if(jokeData) {
            jokesArray.push(jokeData);
        } 

        jokeData = new Datos(dadJoke, currentScore, new Date().toISOString());
        currentScore = null;

        console.log(jokeData.toString());
        console.log(jokesArray);
    };


callApi()


const dataScore= (score:number): number  =>{
    
if (jokeData) {
    jokeData.setScore(score);
}
console.log(jokeData?.toString());
    return score;
}



const meteo = () =>{
    fetch('https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=37.81021&lon=-122.42282&date=2021-08-24&units=auto',{

        method: 'GET',
	    headers: {
		'x-rapidapi-key': '18b61984c3msh05eb99156fa0f44p19c1adjsne63a1f4094cb',
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
    })
    .then((res) => res.json())
    .then((data) =>{
        const tiempo = data.data[0].summary
        const temperatura = data.data[0].temperature
        console.log(temperatura)
        console.log(data.data[0].summary)
        laMeteo.innerHTML = tiempo, temperatura
    })
	
};

meteo()

const chuckNorris = async () =>{
    const response = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {

        method: 'GET',
	    headers: {
		'x-rapidapi-key': 'aa408b7d57msha4316da9b007314p17fbc6jsn6244d289677f',
		'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		accept: 'application/json'
        }
    });
    const data = await response.json();
    const chuckJoke = data.value;
    
    /*.then((res) => res.json())
    .then((data)=>{
        const chuckJoke = data.value
        console.log(data.value)*/
       

    if(chuckJoke.length > 160){
        console.log("La Broma es demasido larga")
        chuckNorris();
    } else {
        console.log("Broma aceptada")
        console.log(chuckJoke,"Chuck");
        broma.innerHTML = chuckJoke;
    


        if(jokeData) {
            jokesArray.push(jokeData);
        } 

        jokeData = new Datos(chuckJoke, currentScore, new Date().toISOString());
        currentScore = null;

        console.log(jokeData.toString());
        console.log(jokesArray);
    }
    };

    card?.classList.add("magicpattern5");

const llamadaAleatoria = async () =>{
    const funciones= [callApi,chuckNorris]
    const randomIndex = Math.floor(Math.random()*funciones.length);
    await funciones[randomIndex]();

    const clases =["magicpattern","magicpattern1","magicpattern2","magicpattern3","magicpattern4","magicpattern5"] 
    const card =document.getElementById("card");

    card?.classList.remove(...clases, "card");

    const randomClass =clases[Math.floor(Math.random()*clases.length)];
    card?.classList.add(randomClass);   

}

