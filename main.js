function fazget(url, body) {
    console.log("Body", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))


    request.onload = function () {
        console.log(this.responseText)
    }
    return request.responseText
}

function main() {
    console.log(fazget("http://localhost:8080/api/v1/signin"))
}

main();