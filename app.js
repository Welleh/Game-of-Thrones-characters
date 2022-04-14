window.onload = function(){
    let url = 'https://thronesapi.com/api/v2/Characters';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    const openModal = () => {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }       

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {      
        body+=`
            <div class="flex-container">
                <div class="flex-container__1st">
                    <img class="daenerys" src="${data[i].imageUrl}">
                    <p class="flex-text">${data[i].fullName}</p>
                </div>
                <button onclick="openModal()" id="myBtn">
                    <i class="uil uil-angle-right icon"></i>
                </button>
            </div>
        `
        }
        document.getElementById('data').innerHTML = body
        //console.log(body) ${character.imageUrl}
    }

    
    }





