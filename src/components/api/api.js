const config = {
    endpoint: "https://quiet-reef-46852.herokuapp.com/"
}

const get = (url) => fetch(config.endpoint + url, {
    method: "GET"
}).then((response) => {
    var contentType = response.headers.get("content-type")
    let returnData

    if (contentType && contentType.includes("application/json")) {
        returnData = response.json()
    }
    else {
        returnData = response
    }

    if (!response.ok) {
        throw new Error()
    }

    return returnData
});

const post = (url, data) => fetch(config.endpoint + url, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
}).then((response) => {
    var contentType = response.headers.get("content-type")
    let returnData

    if (contentType && contentType.includes("application/json")) {
        returnData = response.json()
    }
    else {
        returnData = response
    }

    if (!response.ok) {
        throw new Error()
    }

    return returnData
});

export default { get, post };