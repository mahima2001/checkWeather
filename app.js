const weather=new Weather('Boston','USA');
const ui=new UI();
function getWeather(){
    weather.getWeather()
      .then(results => {
        console.log(results);
        ui.paint(results);
      })
      .catch(err => console.log(err));
  }
getWeather()