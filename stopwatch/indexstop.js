console.log("my name is nitinkumar  ")
let a = 0
let b = 0
let c = 0
let e = 0
// var
document.getElementById('button').addEventListener('click', function () {
    let id = setInterval(() => {

        let d = new Date()
        d.setMilliseconds(a);
        var n = d.getMilliseconds();
        document.getElementById('mini_show').innerHTML = n

        if (n == 999) {
            b + 1
            let d = new Date()
            d.setSeconds(b);
            var nsec = d.getSeconds();

            document.getElementById('second_show').innerHTML = nsec + 1

            console.log(nsec)
            b++

            if (nsec == 59) {
                console.log(c + 1, 'c')

                let d = new Date()
                d.setMinutes(c);
                var nminutes = d.getMinutes();
                console.log(nminutes, 'minutes')
                document.getElementById('minutes_show').innerHTML = nminutes

                c++
            }
            if (nminutes == 59) {
                e + 1
                console.log('test')
                let d = new Date(c)
                d.setSeconds(c);
                var nhour = d.getSeconds();
                document.getElementById('hour_show').innerHTML = nhour + 1
                d++
            }
        }

        a++
    }, 1);
    document.getElementById('stop').addEventListener('click', function () {
        clearInterval(id)
    })
})