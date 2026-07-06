function greeting(){
    let message = 'WELCOME MEET';

    function display(){
        console.log(message)
    }

    return display;
}

let show = greeting()
show()