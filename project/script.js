let show = 'show';
let unshow = 'unshow';
const CreateElementMenu = document.querySelector('#create-element-menu')
const workspace = document.querySelector('#workspace');
let elements = [];
let zoom = 1;
const ZoomSpeed = 0.1;
const ActiveElementListBackgroundColor = "linear-gradient(135deg, #0085ff 0%, #00ffd9 100%)";
const ElementListBackgroundColor = "linear-gradient(135deg, #242424 0%, #242424 100%)";


workspace.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0){
        if (zoom > 0.2) {
            workspace.style.transform = `scale(${zoom -= ZoomSpeed})`;
        }
    } else {    
        workspace.style.transform = `scale(${zoom += ZoomSpeed})`;  
    }
});



//window.addEventListener('keydown', (event) => {
//    const ActiveElement = localStorage.getItem("ElementActive");
//    if (ActiveElement) {
//        if (event.code === 'Delete') {
//            DeleteElement();
//        }
//    }
//  });

function ShowCreateElementMenu() {
    if (~CreateElementMenu.className.indexOf(unshow)) {
        CreateElementMenu.className = CreateElementMenu.className.replace(unshow, show);
    } else {
        CreateElementMenu.className = CreateElementMenu.className.replace(show, unshow);
    }
}

function HideCreateElementMenu() {;
    CreateElementMenu.className = CreateElementMenu.className.replace(show, unshow);
}

function ElementOnClick(event) {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const ElementId = event.target.id;
    const ElementListId = ElementId + "-id";
    const ElementList = document.getElementById(ElementListId);
    const Element = document.getElementById(ElementId);
    ElementList.style.backgroundImage = ActiveElementListBackgroundColor;
    localStorage.clear;
    localStorage.setItem("ElementActive", ElementId);
    if (Element.nodeName === "IMG") {
        ShowImageMenu(ElementId);
    }
    if (Element.nodeName == "DIV") {
        ShowDivMenu(ElementId);
    }
    if (Element.nodeName == "P") {
        ShowTextMenu(ElementId);
    }
}

function ElementListOnClick(event) {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const ElementId = event.target.id;
    const ActiveElementId = ElementId.slice(0, -3);
    const ListElement = document.getElementById(ElementId);
    const Element = document.getElementById(ActiveElementId);
    ListElement.style.backgroundImage = ActiveElementListBackgroundColor;
    localStorage.clear;
    localStorage.setItem("ElementActive", ActiveElementId);
    if (Element.nodeName === "IMG") {
        ShowImageMenu(ActiveElementId);
    }
    if (Element.nodeName == "DIV") {
        ShowDivMenu(ActiveElementId);
    }
    if (Element.nodeName == "P") {
        ShowTextMenu(ActiveElementId);
    }
}

function DeleteElement() {
    const ActiveElementId = localStorage.getItem("ElementActive");
    localStorage.clear();
    const ActiveElement = document.getElementById(ActiveElementId);
    const ActiveElementListId = ActiveElementId + "-id";
    const ActiveElementList = document.getElementById(ActiveElementListId);
    ActiveElementList.remove();
    ActiveElement.remove();
    HideDivMenu();
    HideImageMenu();
    HideTextMenu();
}

function Desactive() {
    const ActiveElementId = localStorage.getItem("ElementActive");
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = ActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    localStorage.clear();
}

function ShowImageMenu(arg) {
    HideImageMenu();
    HideDivMenu();
    HideTextMenu();
    const ElementMenu = document.querySelector('#element-menu-img');
    CreateElementMenu.className = CreateElementMenu.className = "unshow";
    ElementMenu.className = ElementMenu.className.replace(unshow, show);
    const ElementId = arg;
    const Element = document.getElementById(ElementId);
    document.getElementById('element-menu-img-source-input').value = Element.src;
    document.getElementById('element-menu-img-size-input1').value = Element.style.width;
    document.getElementById('element-menu-img-size-input2').value = Element.style.height;
}

function HideImageMenu() {
    const ElementMenu = document.querySelector('#element-menu-img');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateImage() {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ElementId = ""
    for ( let i = 0; i < 10; i++ ) {
        ElementId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    var img = new Image();
    workspace.appendChild(img);
    img.className = "element";
    img.id = ElementId;
    img.setAttribute('onclick', 'ElementOnClick(event)');
    img.src = "../assets/alt-photo.png";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.position = "absolute";
    localStorage.clear;
    localStorage.setItem("ElementActive", ElementId);
    const ElementsList = document.getElementById('elements-list')
    const div = document.createElement("div");
    ElementsList.appendChild(div);
    div.setAttribute("onclick", "ElementListOnClick(event)");
    div.id = ElementId + "-id";
    div.className = "element-list-div";
    const image = document.createElement("img");
    div.appendChild(image);
    image.src = "../assets/image-icon.png";
    image.className = "element-list-image-icon";
    const text = document.createElement("p");
    div.appendChild(text);
    text.textContent = ElementId;
    text.className = "element-list-text";
    elements.push(ElementId);
    div.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowImageMenu(ElementId);
}

function SaveImage() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementSource = document.getElementById('element-menu-img-source-input').value;
    const ElementWidth = document.getElementById('element-menu-img-size-input1').value;
    const ElementHeight = document.getElementById('element-menu-img-size-input2').value;
    const Element = document.getElementById(ElementId);
    Element.style.width = ElementWidth;
    Element.style.height = ElementHeight;
    Element.src = ElementSource;
}

function ShowDivMenu(arg) {
    HideImageMenu();
    HideDivMenu();
    HideTextMenu();
    const ElementMenu = document.querySelector('#element-menu-div')
    CreateElementMenu.className = CreateElementMenu.className = "unshow";
    ElementMenu.className = ElementMenu.className.replace(unshow, show);
    const ElementId = arg;
    const Element = document.getElementById(ElementId);
    document.getElementById('element-menu-div-size-input1').value = Element.style.width;
    document.getElementById('element-menu-div-size-input2').value = Element.style.height;
    document.getElementById('element-menu-div-background-color-input').value = Element.style.backgroundColor;
}

function HideDivMenu() {
    const ElementMenu = document.querySelector('#element-menu-div');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateDiv() {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ElementId = ""
    for ( let i = 0; i < 10; i++ ) {
        ElementId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const div = document.createElement("div");
    workspace.appendChild(div);
    div.className = "element";
    div.id = ElementId;
    div.setAttribute('onclick', 'ElementOnClick(event)');
    div.style.position = "absolute";
    localStorage.clear;
    localStorage.setItem("ElementActive", ElementId);
    const ElementsList = document.getElementById('elements-list')
    const DivList = document.createElement("div");
    ElementsList.appendChild(DivList);
    DivList.setAttribute("onclick", "ElementListOnClick(event)");
    DivList.id = ElementId + "-id";
    DivList.className = "element-list-div";
    const image = document.createElement("img");
    DivList.appendChild(image);
    image.src = "../assets/div-icon-light.png";
    image.className = "element-list-image-icon";
    const text = document.createElement("p");
    DivList.appendChild(text);
    text.textContent = ElementId;
    text.className = "element-list-text";
    elements.push(ElementId);
    DivList.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowDivMenu(ElementId);
}

function SaveDiv() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementWidth = document.getElementById('element-menu-div-size-input1').value;
    const ElementHeight = document.getElementById('element-menu-div-size-input2').value;
    const ElementBackgroundColor = document.getElementById('element-menu-div-background-color-input').value;
    const Element = document.getElementById(ElementId);
    Element.style.width = ElementWidth;
    Element.style.height = ElementHeight;
    Element.style.backgroundColor = ElementBackgroundColor;
}

function ShowTextMenu(arg) {
    HideImageMenu();
    HideDivMenu();
    HideTextMenu();
    const ElementMenu = document.querySelector('#element-menu-text')
    CreateElementMenu.className = CreateElementMenu.className = "unshow";
    ElementMenu.className = ElementMenu.className.replace(unshow, show);
    const ElementId = arg;
    const Element = document.getElementById(ElementId);
    document.getElementById('element-menu-text-content-input').value = Element.textContent;
    document.getElementById('element-menu-text-font-input').value = Element.style.fontFamily;
    document.getElementById('element-menu-text-size-input').value = Element.style.fontSize;
    document.getElementById('element-menu-text-color-input').value = Element.style.color;
}

function HideTextMenu() {
    const ElementMenu = document.querySelector('#element-menu-text');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateText() {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ElementId = ""
    for ( let i = 0; i < 10; i++ ) {
        ElementId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const text = document.createElement("p");
    workspace.appendChild(text);
    text.className = "element";
    text.id = ElementId;
    text.setAttribute('onclick', 'ElementOnClick(event)');
    text.style.position = "absolute";
    text.style.margin = "0";
    localStorage.clear;
    localStorage.setItem("ElementActive", ElementId);
    const ElementsList = document.getElementById('elements-list')
    const DivList = document.createElement("div");
    ElementsList.appendChild(DivList);
    DivList.setAttribute("onclick", "ElementListOnClick(event)");
    DivList.id = ElementId + "-id";
    DivList.className = "element-list-div";
    const image = document.createElement("img");
    DivList.appendChild(image);
    image.src = "../assets/txt-icon.png";
    image.className = "element-list-image-icon";
    const TextList = document.createElement("p");
    DivList.appendChild(TextList);
    TextList.textContent = ElementId;
    TextList.className = "element-list-text";
    elements.push(ElementId);
    DivList.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowTextMenu(ElementId);
}

function SaveText() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementContent = document.getElementById('element-menu-text-content-input').value;
    const ElementFont = document.getElementById('element-menu-text-font-input').value;
    const ElementSize = document.getElementById('element-menu-text-size-input').value;
    const ElementColor = document.getElementById('element-menu-text-color-input').value;
    const Element = document.getElementById(ElementId);
    Element.textContent = ElementContent;
    Element.style.fontFamily = ElementFont;
    Element.style.fontSize = ElementSize;
    Element.style.color = ElementColor;
}

function onleave() {
    localStorage.clear();
}