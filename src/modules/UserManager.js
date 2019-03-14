const remoteURL = "http://localhost:5002";

export default {
  getAll(){
    return fetch(`${remoteURL}/users`).then(users => users.json());
  },

  getSingleUser(userKey, userValue) {
    return fetch(`${remoteURL}/users?${userKey}=${userValue}`).then(e =>
      e.json()
    );
  },

  getByEmail: email =>
    fetch(`${remoteURL}/users/?email=${email}`).then(e => e.json()),

  postUser(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
  }
};
