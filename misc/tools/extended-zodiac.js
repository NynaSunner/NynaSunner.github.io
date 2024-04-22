function cleanUrl(url) {
    // SC is Sign Class (caste), SR is Lunar Sway, AQ is Aspect question. Only AQs are needed
    var questionsArr = url.split("&"); // http://hs.hiveswap.com/ezodiac/aspectresult.php?SC=6, SR=1, AQ1=3, AQ2=2...

    questionsArr.shift(); // Removes the domain and SC
    questionsArr.shift(); // Removes SR

    return questionsArr;
}

Array.prototype.move = function (from, to) { // https://stackoverflow.com/questions/2440700/reordering-arrays THANK YOUUUUU
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function solve(qArr) { // How bad is it to make a switch case inside a switch case
    // First aspect is the "top" one (A-B), second is the "bottom" one (D-E):
    // BreathBlood, BreathBlood, LightVoid, LightVoid, TimeSpace, TimeSpace, HeartMind, HeartMind, HopeRage, HopeRage, LifeDoom, LifeDoom

    var aspectsArr = ["Hope","Breath","Life","Light","Time","Heart","Rage","Blood","Doom","Void","Space","Mind"];

    // HOPE BREATH LIFE LIGHT TIME HEART RAGE. NEED TO REORGANIZE QUESTIONS (RAGE IS WHAT I FEEL RN).
    // breath breath light light time time heart heart hope hope life life
    // Moves hoperage questions to pos 1
    qArr.move(9,0);
    qArr.move(9,0);
    // hope hope breath breath light light time time heart heart life life
    // Moves lifedoom questions to after breath
    qArr.move(11,4);
    qArr.move(11,4);
    // hope hope breath breath life life light light time time heart heart

    let scoresArr = [0,0,0,0,0,0,0,0,0,0,0,0];
    var pairsArr = [0,0,1,1,2,2,3,3,4,4,5,5];

    for (let i = 0; i < qArr.length; i++) {
        var auxArr = qArr[i].split("="); // AQ1, 3
        var pair = pairsArr[i];

        switch (auxArr[1]) {
            case "1":
                scoresArr[pair] = scoresArr[pair]+8;
                scoresArr[(pair+1) % 12] = scoresArr[(pair+1) % 12]+4;
                scoresArr[(pair+11) % 12] = scoresArr[(pair+11) % 12]+4;
                break;
            case "2":
                scoresArr[pair] = scoresArr[pair]+4;
                scoresArr[(pair+1) % 12] = scoresArr[(pair+1) % 12]+2;
                scoresArr[(pair+11) % 12] = scoresArr[(pair+11) % 12]+2;
                break;
            case "3": // ughhhhhh
                // Remove first and adjacents
                scoresArr[pair] = scoresArr[pair]-1;
                scoresArr[(pair+1) % 12] = scoresArr[(pair+1) % 12]-1;
                scoresArr[(pair+11) % 12] = scoresArr[(pair+11) % 12]-1;
                // Remove second and adjacents
                scoresArr[(pair+6) % 12] = scoresArr[(pair+6) % 12]-1;
                scoresArr[(pair+5) % 12] = scoresArr[(pair+5) % 12]-2;
                scoresArr[(pair+7) % 12] = scoresArr[(pair+7) % 12]-2;
                // Add to others
                scoresArr[(pair+2) % 12] = scoresArr[(pair+2) % 12]+3;
                scoresArr[(pair+3) % 12] = scoresArr[(pair+3) % 12]+3;
                scoresArr[(pair+4) % 12] = scoresArr[(pair+4) % 12]+3;
                scoresArr[(pair+8) % 12] = scoresArr[(pair+8) % 12]+3;
                scoresArr[(pair+9) % 12] = scoresArr[(pair+9) % 12]+3;
                scoresArr[(pair+10) % 12] = scoresArr[(pair+10) % 12]+3;
                break;
            case "4":
                scoresArr[(pair+6) % 12] = scoresArr[(pair+6) % 12]+4;
                scoresArr[(pair+5) % 12] = scoresArr[(pair+5) % 12]+2;
                scoresArr[(pair+7) % 12] = scoresArr[(pair+7) % 12]+2;
                break;
            case "5":
                scoresArr[(pair+6) % 12] = scoresArr[(pair+6) % 12]+8;
                scoresArr[(pair+5) % 12] = scoresArr[(pair+5) % 12]+4;
                scoresArr[(pair+7) % 12] = scoresArr[(pair+7) % 12]+4;
                break;
            default:
                console.log("What the fuck have you done");
                break;
        } // Calcs are wrong. Check this post out later: https://katanahime.tumblr.com/post/168129033014/new-and-improved-extended-zodiac-aspect-quiz
        
    }
    // Moving them because having it start with hope is icking me
    scoresArr.move(0,11);
    aspectsArr.move(0,11);

    let list = document.getElementById("results");
    list.innerHTML = ""; // Empty the list
    for (let i = 0; i < scoresArr.length; i++) {
        console.log(aspectsArr[i] + ": " + scoresArr[i]);
        let li = document.createElement('li');
        li.innerText = (aspectsArr[i] + ": " + scoresArr[i]);
        list.appendChild(li);
    }
    
    return scoresArr;
}

function ball() { // This thang has to be button onclick
    var url = document.getElementById("testurl").value;

    fuckingGraph(solve(cleanUrl(url)));
}

function fuckingGraph(arr){
    const ctx = document.getElementById('graph');

    const data = {
      labels: ["Breath","Life","Light","Time","Heart","Rage","Blood","Doom","Void","Space","Mind","Hope"],
      datasets: [{
        data: arr,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    };

    new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          },
          scale: {
            ticks: {
                beginAtZero: true,
                max: 30
            }
          },
          plugins: {
            legend: {
               display: false
            }
          }
        }
    });
}