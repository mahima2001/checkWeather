class Weather{
    constructor(city,country){
        this.apiKey='0e432899ad82388e85bfa327e3e17950'
        this.city=city;
        this.country=country;
    }

    async getWeather(){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`)
        
        const responsedata=await response.json();
        console.log(responsedata)
        return responsedata;
    }
    changeLocation(city){
        this.city=city;
    }
}