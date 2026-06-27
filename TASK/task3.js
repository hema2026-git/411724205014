const messageInput = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const charCount = document.getElementById("charCount");
const status = document.getElementById("status");
const messagesContainer = document.getElementById("messagesContainer");
let messages = [];
messageInput.addEventListener("input", function () {
    charCount.textContent =
        "Character Count: " + messageInput.value.length;
});
function displayMessages() {
    messagesContainer.innerHTML = "";
    messages.forEach((msg, index) => {
        const msgElement = document.createElement("div");
        msgElement.classList.add("message");
        msgElement.textContent = msg;
        messagesContainer.appendChild(msgElement);
        setTimeout(() => {
            if (messages.includes(msg)) {
                messages.splice(messages.indexOf(msg), 1);
                displayMessages();
                status.textContent = "Message Expired";
            }
        }, 10000);
    });
}
addBtn.addEventListener("click", function () {
    const message = messageInput.value.trim();
    const messagePromise = new Promise((resolve, reject) => {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }
    });
    messagePromise
        .then((msg) => {
            status.textContent = "Message Added Successfully";
            messages.push(msg);
            displayMessages();
            messageInput.value = "";
            charCount.textContent = "Character Count: 0";
        })
        .catch((error) => {
            status.textContent = error;
        });
});
clearBtn.addEventListener("click", function () {
    messages = [];
    messagesContainer.innerHTML = "";
    status.textContent = "All Messages Cleared";
});