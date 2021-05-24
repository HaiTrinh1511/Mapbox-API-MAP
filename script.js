mapboxgl.accessToken = 'pk.eyJ1IjoiaGFpdHJpbmgxNTExIiwiYSI6ImNrcDJiOGltYTE1enMyd213bHAyOGVpZ2gifQ.KKtwoUYs2_PVqVSEmzoKBQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([21.02, 105.83])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 8
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}