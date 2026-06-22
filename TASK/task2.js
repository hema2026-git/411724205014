function loadUsers(){

    document.getElementById("status").innerHTML = "Loading...";
    document.getElementById("users").innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            let output = "";
            data.forEach(user => {
                output += `
                <div class="user">
                    <h3>${user.name}</h3>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Phone:</b> ${user.phone}</p>
                </div>
                `;
            });

            document.getElementById("users").innerHTML = output;

            document.getElementById("status").innerHTML = "Loaded successfully";

        })
        .catch(error => {
            document.getElementById("status").innerHTML = "Error in loading";
            console.log(error);
        });

    }, 2000);
}