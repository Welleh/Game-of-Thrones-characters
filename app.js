var resp_data = [];

window.onload = function(){
    let url = 'https://thronesapi.com/api/v2/Characters';
        fetch(url)
            .then( response => response.json() )
            .then( data => {
                var s = data.sort(SortArray);
                mostrarData(s);
            } )
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
                    <button class="icon-button" onclick="openModal(${i})" id="myBtn">
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
    modal.style.display = "flex";
    renderModalContent(resp_data[index]);
}

function renderModalContent(data){
    console.log('data', data);
    let body = `
        <img src="${data.imageUrl}" class="img-modal">
        <p class="modal-name">${data.fullName}</p>
        <p class="modal-title">${data.title}</p>
        <p class="modal-family">${data.family}</p> 
    `
    document.getElementById('modal-display').innerHTML = body
}


function SortArray(x, y){
    if (x.fullName < y.fullName) {return -1;}
    if (x.fullName > y.fullName) {return 1;}
    return 0;
}

