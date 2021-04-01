let count = 0
let btns = document.querySelectorAll('.btn')
btns.forEach(function (e) {
    e.addEventListener('click', function (e) {
        let styles = e.currentTarget.classList
        if (styles.contains('nitin')) {
            count++
        }
        else if (styles.contains('kumar')) {
            count = 0
        }
        else if (styles.contains('Decrement')) {
            if (count <= 0) {
                alert('value is less than 0')
            }
            else {
                count--
            }
        }
        document.getElementById('showcount').innerText = count
        console.log(count)
    })
})
