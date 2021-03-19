console.log("enter the value for the test")
let completepage = ''
function inputhandle() {

    return inputdata = document.getElementById('inputdata').value
}

let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    let cityname = inputhandle()
    async function getdata() {
        const respones = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=62c6644a4b6e688a891f5b304cb407d0`)
        const user = await respones.json()
        return user
        7
    }



    getdata().then((value) => {
        console.log(value)
        if (value.name) {
            console.log(value.weather[0].main)

            let temp_max = Math.floor(value.main.temp_max - 273.15)
            let temp_min = Math.floor(value.main.temp_min - 274.15)
            let temp = Math.floor(value.main.temp - 273.15)
            let typeWether = value.weather[0].main
            let latitude = value.coord.lat
            let longtude = value.coord.lon

            completepage = `<div id='container-img'></div>
            <div id="container-group">
                <div id="container-1">
                    <p id="objname"> ${value.name} </p> 
                </div>
                <div id="container-2">
                    <p id="WeatherDetails">Weather details</p>
                    <p id="latitude"> latitude:${latitude} </p>
                    <p id="longtude"> longtude:${longtude} </p>
                    <p id="temp"> Temp:${temp} </p>
                    <p id="maxTemp"> Max-temp: ${temp_max} celicus </p>
                    <p id="minTemp"> Min-temp:${temp_min} celicus</p>
                <p id="typeWether"> Type Of Weather: ${typeWether}</p>
                </div>
     
            </div>`

            document.getElementById('container').innerHTML = completepage

        }
        else { alert('please enter the correct name of the city') }
    })
})

// 



