function Creation_Date(id) {

    //define dates
    let givenDate = new Date("2023-07-18");
    let currentDate = new Date();


    //subtract current date with day created
    let timeDiff = currentDate.getTime() - givenDate;

    // Convert to days
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


    console.log(days);

    //return
    var myElement = document.getElementById(id);

    // Modify the content
    myElement.innerHTML = days;

}

Creation_Date("date");
