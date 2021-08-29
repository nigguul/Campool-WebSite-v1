const hostname = '127.0.0.1';
const port = 3000;

fetch(`http://${hostname}:${port}/api/829487499944394752/rankingPlayers.json`, {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        ranking(data)
    });

/*fetch(`http://${hostname}:${port}/api/829487499944394752/teams.json`, {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        rankingTeams(data)
    });*/

function ranking(data) {

    let players = Object.keys(data);

    players.sort((a, b) => {
        return data[b] - data[a];
    });

    document.getElementById("p1").innerHTML = players[0]
    document.getElementById("p2").innerHTML = players[1]
    document.getElementById("p3").innerHTML = players[2]
    document.getElementById("p4").innerHTML = players[3]
    document.getElementById("p5").innerHTML = players[4]
}

/*function rankingTeams(data) {

    let times = Object.keys(data);

        times.sort((a, b) => {
            return data.points - data.points;
        });
    
    document.getElementById("team1").innerHTML = times[0]
    document.getElementById("team2").innerHTML = times[1]
    document.getElementById("team3").innerHTML = times[2]
    document.getElementById("team4").innerHTML = times[3]
    document.getElementById("team5").innerHTML = times[4]
}*/
