


function Message() {
    const name = "Omi";

    if (name == "Omi") {

        return <h1 class="text-pink-600">Hello, {name}</h1>;
    }
    else {
        return <h1>Hello, anonymous</h1>;
    }
}

export default Message;