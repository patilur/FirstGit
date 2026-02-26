const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
    console.log("GET Request");
    axios.get("https://crudcrud.com/api/43d94499bd1b4361b65294ec4bd32d1b/todo")
        .then((res) => console.log(res))
        .catch(errconsole.log(err))
}


function postTodo() {
    console.log("POST Request");
    axios.post("https://crudcrud.com/api/43d94499bd1b4361b65294ec4bd32d1b/todo", {
        title: "pickup parents",
        completed: false,
    })
        .then((res) => console.log(res))
        .catch(errconsole.log(err))

}


function putTodo() {
    console.log("PUT Request");
    axios.put("https://crudcrud.com/api/43d94499bd1b4361b65294ec4bd32d1b/todo/6985e5f09a4cac03e8a333fb", {
        title: "pickup parents",
        completed: true,
    })
        .then((res) => console.log(res))
        .catch(errconsole.log(err))
}

function deleteTodo() {
    console.log("DELETE Request");
    axios.delete("https://crudcrud.com/api/43d94499bd1b4361b65294ec4bd32d1b/todo/6985e6309a4cac03e8a333fc")
        .then((res) => console.log(res))
        .catch(errconsole.log(err))
}
