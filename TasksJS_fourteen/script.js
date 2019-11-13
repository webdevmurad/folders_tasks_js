// task 1 --------------------


fetch('http://api.openweathermap.org/data/2.5/weather?id=532096&appid=d1d9caae121905404d5d1b916e2f5f97')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]
        ['description'];
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })









    // https://openweathermap.org/img/wn/03d@2x.png