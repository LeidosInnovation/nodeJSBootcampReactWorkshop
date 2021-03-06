export function fetchTasks(endpoint) {
   return fetch(`${endpoint}`)
       .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    })
    .then((response) => response.json())
    .then((tasks) => tasks);
}

export function addTask(endpoint, action) {
    var event = action.payload.event;
    var task = { title: event.target.elements.title.value, isDone: false };
    var body = JSON.stringify(task);
    return fetch(`${endpoint}`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: body
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
    .then((task) => { 
        console.log("NEW TASK: " + JSON.stringify(task));
        return task; });
}

export function deleteTask(endpoint, action) {
    const id = action.payload.id;
    return fetch(`${endpoint}/${id}`, {
        headers: {
            'Accept': 'application/json, text/plain, * / *',
            'Content-Type': 'application/json'
        },
        method: "DELETE",
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
    .then(() => id);
}

export function updateTask(endpoint, action) {
    const task =
        {
            _id: action.payload.id,
            title: action.payload.title,
            isDone: action.payload.selected
        };
    var body = JSON.stringify(task);
    return fetch(`${endpoint}/${task._id}`, {
        headers: {
            'Accept': 'application/json, text/plain, * / *',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: body
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        console.log("TASK: " + JSON.stringify(task));
        return task /* response */;
    })
    /* .then((response) => response.json())
    .then((x) => { 
        console.log("x: " + JSON.stringify(x));
        console.log("TASK: " + JSON.stringify(task));
        return task; }); */
}