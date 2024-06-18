const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b75f77b196msh479574ea726a8abp1124f8jsn2d5d6392e691',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getWeather(city){

try {
	cityName.innerHTML=city
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result = await response.json();
	console.log(result);
	
	document.getElementById("temp").innerHTML=result.temp
	feels_like.innerHTML = result.feels_like
	humidity.innerHTML = result.humidity
	min_temp.innerHTML = result.min_temp
	max_temp.innerHTML = result.max_temp
	wind_speed.innerHTML = result.wind_speed
	wind_degrees.innerHTML = result.wind_degrees
	sunrise.innerHTML = result.sunrise
	sunset.innerHTML = result.sunset
	
} catch (error) {
	console.error(error);
}
}


heyy.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})



async function getWeatherNewYork(city){

	try {
		cityName.innerHTML=city
		const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
		const result = await response.json();
		console.log(result);
		
		document.getElementById("tempny").innerHTML=result.temp
		
		humidityny.innerHTML = result.humidity
		
		wind_speedny.innerHTML = result.wind_speed
		
		
	} catch (error) {
		console.error(error);
	}
	}
	getWeatherNewYork("New York")

	async function getWeatherMelbourne(city){

		try {
			cityName.innerHTML=city
			const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
			const result = await response.json();
			console.log(result);
			
			document.getElementById("tempml").innerHTML=result.temp
			
			humidityml.innerHTML = result.humidity
			
			wind_speedml.innerHTML = result.wind_speed
			
			
		} catch (error) {
			console.error(error);
		}
		}
		getWeatherMelbourne("Melbourne")

		
	async function getWeatherLondon(city){

		try {
			cityName.innerHTML=city
			const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
			const result = await response.json();
			console.log(result);
			
			document.getElementById("templ").innerHTML=result.temp
			
			humidityl.innerHTML = result.humidity
			
			wind_speedl.innerHTML = result.wind_speed
			
			
		} catch (error) {
			console.error(error);
		}
		}
		getWeatherLondon("London")

		
	async function getWeatherCalifornia(city){

		try {
			cityName.innerHTML=city
			const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
			const result = await response.json();
			console.log(result);
			
			document.getElementById("tempc").innerHTML=result.temp
			
			humidityc.innerHTML = result.humidity
			
			wind_speedc.innerHTML = result.wind_speed
			
			
		} catch (error) {
			console.error(error);
		}
		}
		getWeatherCalifornia("California")

		getWeather("Delhi")