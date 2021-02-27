let value = []

function resultfun() {
    let percentage
    document.getElementById('btn').addEventListener('click', function test1() {
        let HINDI = document.getElementById('HINDI').value;
        let ENGLISH = document.getElementById('ENGLISH').value;
        let MATHMATICS = document.getElementById('MATHMATICS').value;
        let SCIENCE = document.getElementById('SCIENCE').value;
        let S_SCIENCE = document.getElementById('S_SCIENCE').value;
        let result = (Number(HINDI) + Number(S_SCIENCE) + Number(ENGLISH) + Number(MATHMATICS) + Number(SCIENCE))

        percentage = Math.floor(result / 500 * 100)
        console.log(percentage)
        if (percentage !== 0) {
            console.log('this is null')
            if (percentage <= 100 && percentage >= 85) {
                document.getElementById('hiid3').innerHTML = ("you score Excellent")
                document.getElementById("imgid").style.visibility = "visible";
                document.getElementById('imgid').src = 'party.gif'
            }
            if (percentage <= 84.5 && percentage >= 74.5) {
                document.getElementById('hiid3').innerHTML = ("you score very good")
                document.getElementById("imgid").style.visibility = "visible";
                document.getElementById('imgid').src = 'new.gif'

            }
            if (percentage <= 73 && percentage >= 62) {
                document.getElementById("imgid").style.visibility = "visible";
                document.getElementById('imgid').src = 'new2.gif'
                document.getElementById('hiid3').innerHTML = ("you score good")
            }
            if (percentage <= 61 && percentage >= 40) {
                document.getElementById("imgid").style.visibility = "visible";
                document.getElementById('imgid').src = '1new.gif'
                document.getElementById('hiid3').innerHTML = ("you just pass")
            }
            if (percentage <= 40 && percentage >= 0) {
                document.getElementById('hiid3').innerHTML = ("you are fail")
                document.getElementById("imgid").style.visibility = "visible";
                document.getElementById('imgid').src = 'danger.gif'
            }
        }
        else {
            alert("please provide some value")
        }
        document.getElementById('hiid1').innerHTML = percentage
    })

}
resultfun()