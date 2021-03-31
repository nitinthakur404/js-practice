console.log('test')
function postapi() {
    url = 'http://dummy.restapiexample.com/api/v1/create'
    data = { "name": "nitin", "salary": "123", "age": "23" }
    params = {
        method: 'Post',
        headers: {
            'Content-Type': `application/json`
        },
        body: data
    }
    fetch(url, params).then(resolve => resolve.json())
        .then(data => console.log(data)
        )
}
postapi()