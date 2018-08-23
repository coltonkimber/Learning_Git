document.addEventListener("DOMContentLoeaded", function(){
    //the entire game is inside here
    //variables
    var name = document.getElementById('name')
    var startButton = document.getElementById('start-button')
    name.addEventListener('keyup', function(event){
       if (event.target.value !=='')
       startButton.className=""
    }
        else {
            startButton.className="hide"
        }
    })

    

    //functions
    
    function startGame() {
        alert('start game')
    }
    
    startButton.addEventListener('click', startGame)


})