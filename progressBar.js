let i = 0 ; //set the variable i to the number 0
function move() { //create a function that will move the progress bar
    if (i == 0){ //check to see if i is equal to the number 0 and if true...
        i = 1; //the variable i now has a value of 1
        let elem = document.getElementById("myBar"); //variable that targets the myBar div element
        let width = 1;  //create a varible named width and give it a value of 1
        let id = setInterval(frame, 50);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%"

            }
        };
    }
};

move();

interval