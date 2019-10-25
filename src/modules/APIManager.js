const remoteURL = "http://localhost:8000"

export default {
    get(resource, id) {
        return fetch(`${remoteURL}/${resource}/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("dadmoves_token")}`
            }
        }).then(response => response.json())
    },
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("dadmoves_token")}`
            }
        }).then(response => response.json())
    },
    getAllUnauthorized(resource) {

          return fetch(`${remoteURL}/${resource}`, {
              "method": "GET",
              "headers": {
                  "Accept": "application/json"
              }
          })
              .then(response => response.json())
  },
    post(resource, newObject) {
        return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("dadmoves_token")}`
            },
            body: JSON.stringify(newObject)
        })
    },
    put(resource, resourceObject) {
        return fetch(`${remoteURL}/${resource}/${resourceObject.id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dadmoves_token")}`
            },
            body: JSON.stringify(resourceObject)
        }).then(data => data.json())
    },
    delete(resource) {
        return fetch(`${remoteURL}/${resource}/${resource.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("dadmoves_token")}`
            }
        })
    }
}
