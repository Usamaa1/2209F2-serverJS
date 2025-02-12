import express from 'express'
import cors from 'cors';
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile', (req, res) => {
  res.send('Profile Message')
})
app.get('/aptech', (req, res) => {
  res.send('Hello Aptech!')
})
app.get('/weather/:cityName',(req,res)=>{

    // const weatherData = 
    //   [{
    //     cityName: 'Karachi',
    //     tempInC:30,
    //     tempInF:12,
    //     wind: "NS",
    //     humidity: 74,
    //     wind_kph: 38.9,
    //   },
    //  {
    //     cityName: 'Lahore',
    //     tempInC:23,
    //     tempInF:45,
    //     wind: "WS",
    //     humidity: 56,
    //     wind_kph: 77.9,
    //   },
    //   {
    //     cityName: 'Islamabad',
    //     tempInC:12,
    //     tempInF:9,
    //     wind: "EN",
    //     humidity: 57,
    //     wind_kph: 78.9,
    //   }];

    const weatherData = {
      karachi:{
        cityName: 'Karachi',
        tempInC:30,
        tempInF:12,
        wind: "NS",
        humidity: 74,
        wind_kph: 38.9,
      },
      lahore:{
        cityName: 'Lahore',
        tempInC:23,
        tempInF:45,
        wind: "WS",
        humidity: 56,
        wind_kph: 77.9,
      },
      islamabad:{
        cityName: 'Islamabad',
        tempInC:12,
        tempInF:9,
        wind: "EN",
        humidity: 57,
        wind_kph: 78.9,
      },
    };

    let cityName = req.params.cityName.toLowerCase();
    console.log(cityName);

    // console.log(weatherData[])

    const weatherCityData = weatherData[cityName];



  // res.send(cityName)
  res.send(weatherCityData == undefined ? 'No data found': weatherCityData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


