let observers = [];
function attach(observer) {
    observers.push(observer);
}
function detach(observer) {
    let newObservers = [];
    for (let i of observers) {
        if (i != observer) {
            newObservers.push(i);
        }
    }
    observers = newObservers;
}
function notify(event) {
    for (let i of observers) {
        console.log(i + " : " + event);
    }
}
attach("A");
attach("B");
notify("Holiday");
attach("C");
detach("B");
notify("Exam");
notify("Fest");

const age=21
if(age<18){
    console.log("Not Eligible")
}
else if(age==18){
    console.log("Eligible,Congrats")
}
else{
    console.log("Eligible")
}