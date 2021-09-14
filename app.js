var displayer = document.getElementById('displayer');
var completed = document.getElementById("completed");
var firstId = document.getElementById("id");
var title = document.getElementById("title");
var userSecondId = document.getElementById("userId");

displayer.innerHTML = "Data coming from the jsonplaceholder API"

const fetchData = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("This is the data", data)
    // localStorage.setItem("api data", data)

    completed.innerText = `Completed Text:  ${data.completed}`;
    firstId.innerHTML = `id:  ${data.id}`;
    title.innerHTML = `title:  ${data.title}`;
    userSecondId.innerHTML = `userId:  ${data.userId}`;
}



function temp() {
    var now = new Date();
    var newDate = `cutomized date ${now.getHours()}:${now.getMinutes()}:${now.getMilliseconds()}`
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hour == 17 && minutes == 13 && seconds == 30) {
        console.log("API has been called");
        fetchData()
    }

    else {
        console.log(`API timer is running: ${hour}:${minutes}:${seconds}`)
        console.log("API will be called once the timer get end");
    }
}

setInterval(temp, 1000);

// function counterUpdater() {
//     var counter = 0;
//     var counterUpdating = setInterval(counterUpdater, 1000)
//     if (counter == 5) {
//         counter = counter + 1;
//         setTimeout(fetchData);
//         console.log("yes conditon matched");
//     }
//     else {
//         console.log("Error condition is not getting match")
//         console.log(counterUpdating)
//     }

// }


// // counterUpdater()

// function gettingTime() {
//     const date = new Date();
//     const hours = new Date().getHours();
//     const minutes = new Date().getMinutes();

//     gettingTime()
//     // fetchData()

// }



// function counterUpdater() {
//     var count = 0;
//     setInterval(function counter() {
//         if (count < 10) {
//             count++;
//         }
//         console.log(count)
//     }, 3000);

//     function counterHandler() {
//         console.log(count)
//         if (count == 10) {
//             clearInterval(counter);
//         }
//     }

//     counterHandler()


// }

// counterUpdater()


// var hour = new Date().getHours();
// var minutes = new Date().getMinutes();

// var cont = 0;
// var setHours = hour;
// // var setMinutes = ;
// console.log(setHours);


// var object = setInterval(displayCounter, 1000);

// function displayCounter() {
//     console.log(cont);
//     cont++;
//     if (minutes == setMinutes) {

//         clearInterval(object)
//     }

// }


// var now = new Date();
// var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
// console.log(millisTill10);


// if (millisTill10 < 0) {
//      millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
// }
// setTimeout(function(){alert("It's 10am!")}, millisTill10);



// var now = new Date();
// console.log(now)
// var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
// if (millisTill10 < 0) {
//     // millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
//     millisTill10 += 864; // it's after 10am, try 10am tomorrow.
//     console.log(millisTill10);
// }
// setTimeout(function () { console.log("It's 10am!") }, millisTill10);

// console.log(now[1]);
// var newDate = `${now.getHours()}:${now.getMinutes()}:${now.getMilliseconds()}`

// console.log("New Date", newDate);
// console.log(now.getSeconds());

// var date = new Date()
// var custDate = `cutomized date ${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`
// console.log(custDate);
