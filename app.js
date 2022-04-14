var resp_data = [];

window.onload = function(){
    let url = 'https://thronesapi.com/api/v2/Characters';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )      

    const mostrarData = (data) => {
        resp_data = data;
        let body = "";
        for (var i = 0; i < data.length; i++) {      
            body+=`
                <div class="flex-container">
                    <div class="flex-container__1st">
                        <img class="daenerys" src="${data[i].imageUrl}">
                        <p class="flex-text">${data[i].fullName}</p>
                    </div>
                    <button onclick="openModal(${i})" id="myBtn">
                        <i class="uil uil-angle-right icon"></i>
                    </button>
                </div>
            `
        }
        document.getElementById('data').innerHTML = body
    }

    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

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
    
}

// When the user clicks on the button, open the modal
function openModal(index) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    renderModalContent(resp_data[index]);
}

function renderModalContent(data){
    console.log('data', data); //WILLY
}
