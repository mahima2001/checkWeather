class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.t_max= document.getElementById('w-t_max');
      this.t_min = document.getElementById('w-t_min');
    }
  
    paint(weather) {
      this.location.textContent = weather.name;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = weather.main.temp;
      this.icon.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      )
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
      this.t_max.textContent = `Max temperature: ${weather.main.temp_max} `;
      this.t_min.textContent = `Min temperature: ${weather.main.temp_min} `;
    }
  }