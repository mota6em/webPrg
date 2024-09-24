const container = document.getElementById('container');
function saveToLocalStorage() {
    localStorage.setItem("container", container.innerHTML);
}

if(localStorage.getItem("container")){
    container.innerHTML = localStorage.getItem("container");
}

let clickedColors = [];
const buttons = document.querySelectorAll('.stylishButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        if (!clickedColors.includes(color)) {
            clickedColors.push(color); 
        }
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.classList.add("element");
        circle.style.backgroundColor = color;
        container.append(circle);
        saveToLocalStorage();
    });
});


container.addEventListener('click', (event) => {
    if(event.target === container){
        if (clickedColors.length > 0) {
            alert("You can find the clicked colors here (if you look closely)! Colors: " + clickedColors.join(', '));
        } else {
            alert("You haven't clicked any color buttons yet.");
        }
    }
});

function switchCircleOrRectangle(eTrgt){
    if(eTrgt.classList.contains('circle')){
        eTrgt.classList.add("rectangle");
        eTrgt.classList.remove('circle');
    }
    else{
        eTrgt.classList.add('circle');
        eTrgt.classList.remove('rectangle');
    }
}

function delegate(parent, type, selector, handler){
    parent.addEventListener(type, function(event){
        const targetElement = event.target.closest(selector);
        if(this.contains(targetElement)){
            handler.call(targetElement,event);
        }
    })
}

delegate(container, 'click', 'div.element', (e) =>{
    switchCircleOrRectangle(e.target);
})