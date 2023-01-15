let show = 'show';
let unshow = 'unshow';
const CreateElementMenu = document.querySelector('#create-element-menu')
const workspace = document.querySelector('#workspace');
let elements = [];
let zoom = 0.4;
const ZoomSpeed = 0.03;
const ActiveElementListBackgroundColor = "linear-gradient(135deg, #0085ff 0%, #00ffd9 100%)";
const ElementListBackgroundColor = "linear-gradient(135deg, #242424 0%, #242424 100%)";


workspace.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0){
        if (zoom > 0.06) {
            workspace.style.transform = `scale(${zoom -= ZoomSpeed})`;
        }
    } else {    
        workspace.style.transform = `scale(${zoom += ZoomSpeed})`;  
    }
});

function DecreaseLeftSideMenu() {
    const leftClass = "arrow-left";
    const rightClass = "arrow-right";
    const LeftSideMenu = document.getElementById("left-side-menu");
    const LayersMenu = document.getElementById("elements-list");
    const LayersMenuHeader = document.getElementById("elements-list-header");
    const DecreaseLeftSideMenuDiv = document.getElementById("decrease-left-side-menu-div");
    const DecreaseLeftSideMenuArrow = document.getElementById("decrease-left-side-menu-arrow");
    const Icon = document.getElementById("icon");
    const SmallIcon = document.getElementById("small-icon");
    const CreateElementButton = document.getElementById("create-element-button");
    const CreateElementButtonText = document.getElementById("create-element-button-text");
    const CreateElementIcon = document.getElementById("create-element-icon");
    const SaveButton = document.getElementById("save-button");
    const SaveButtonText = document.getElementById("save-button-text");
    const SaveButtonIcon = document.getElementById("save-icon");
    const SettingsButton = document.getElementById("settings-button");
    const SettingsButtonText = document.getElementById("settings-button-text");
    const SettingsButtonIcon = document.getElementById("settings-icon");
    const LayersMenuText = document.getElementById("elements-list-header-text");

    if (~DecreaseLeftSideMenuArrow.className.indexOf(leftClass)) {
        DecreaseLeftSideMenuArrow.className = DecreaseLeftSideMenuArrow.className.replace(leftClass, rightClass);
        LeftSideMenu.style.width = "80px";
        DecreaseLeftSideMenuDiv.style.marginLeft = "80px";
        LayersMenu.style.width = "80px";
        LayersMenuHeader.style.width = "80px";
        Icon.style.display = "none";
        SmallIcon.style.display = "block";
        CreateElementButton.style.width = "50px";
        CreateElementButton.style.height = "50px";
        CreateElementButton.style.marginLeft = "15px";
        CreateElementButtonText.style.display = "none";
        CreateElementIcon.style.display = "block";
        SaveButton.style.width = "50px";
        SaveButton.style.height = "50px";
        SaveButton.style.marginLeft = "15px";
        SaveButtonText.style.display = "none";
        SaveButtonIcon.style.display = "block";
        SettingsButton.style.width = "50px";
        SettingsButton.style.height = "50px";
        SettingsButton.style.marginLeft = "15px";
        SettingsButtonText.style.display = "none";
        SettingsButtonIcon.style.display = "block";
        LayersMenuText.style.display = "none";
    } else {
        DecreaseLeftSideMenuArrow.className = DecreaseLeftSideMenuArrow.className.replace(rightClass, leftClass);
        LeftSideMenu.style.width = "266px";
        DecreaseLeftSideMenuDiv.style.marginLeft = "266px";
        LayersMenu.style.width = "266px";
        LayersMenuHeader.style.width = "266px";
        LayersMenuHeader.style.width = "266px";
        Icon.style.display = "block";
        SmallIcon.style.display = "none";
        CreateElementButton.style.width = "200px";
        CreateElementButton.style.height = "40px";
        CreateElementButton.style.marginLeft = "33px";
        CreateElementButtonText.style.display = "block";
        CreateElementIcon.style.display = "none";
        SaveButton.style.width = "200px";
        SaveButton.style.height = "40px";
        SaveButton.style.marginLeft = "33px";
        SaveButtonText.style.display = "block";
        SaveButtonIcon.style.display = "none";
        SettingsButton.style.width = "200px";
        SettingsButton.style.height = "40px";
        SettingsButton.style.marginLeft = "33px";
        SettingsButtonText.style.display = "block";
        SettingsButtonIcon.style.display = "none";
        LayersMenuText.style.display = "block";
    }
}

//window.addEventListener('keydown', (event) => {
//    const ActiveElement = localStorage.getItem("ElementActive");
//    if (ActiveElement) {
//        if (event.code === 'Delete') {
//            DeleteElement();
//        }
//    }
//  });

function ActiveSettings(arg) {
    if (arg == "project-settings") {
        const ElementList = document.getElementById("project-settings-div");
        ElementList.style.backgroundColor = "green";
    }
}

function ShowSettingsMenu() {
    const SettingsMenu = document.getElementById("settings-menu");
    if (~SettingsMenu.className.indexOf(unshow)) {
        SettingsMenu.className = SettingsMenu.className.replace(unshow, show);
        ActiveSettings("project-settings");
    } else {
        SettingsMenu.className = SettingsMenu.className.replace(show, unshow);
    }
}

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
    Active(event.target.id);
}

function ElementListOnClick(event) {
    const ElementListId = event.target.id;
    const ElementId = ElementListId.slice(0, -3);
    Active(ElementId);
}

function DeleteElement() {
    if (elements.length === 0) {
        const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
        ElementListNoLayers.className = ElementListNoLayers.className.replace(unshow, show);
    }
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
    if (ActiveElementId) {
        const ActiveElement = document.getElementById(ActiveElementId);
        ActiveElement.style.border = "0px solid black";
        const ActiveElementListId = ActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    localStorage.clear();
}

function WorkspaceOnClick() {
    Desactive();
    HideImageMenu();
    HideDivMenu();
    HideTextMenu();
}

function Active(arg) {
    const BeforeActiveElementId = localStorage.getItem("ElementActive");
    if (BeforeActiveElementId) {
        const ActiveElementListId = BeforeActiveElementId + "-id";
        const ActiveElementList = document.getElementById(ActiveElementListId);
        ActiveElementList.style.backgroundImage = ElementListBackgroundColor;
    }
    const ElementId = arg;
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
    // Element.style.border = "2px solid aqua";
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
    document.getElementById('element-menu-img-margin-input1').value = Element.style.marginTop;
    document.getElementById('element-menu-img-margin-input2').value = Element.style.marginLeft;
}

function HideImageMenu() {
    const ElementMenu = document.querySelector('#element-menu-img');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateImage() {
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = CreateElementMenu.className.replace(show, unshow);
    Desactive();
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
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.position = "absolute";
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
    Active(ElementId);
}

function SaveImage() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementSource = document.getElementById('element-menu-img-source-input').value;
    const ElementWidth = document.getElementById('element-menu-img-size-input1').value;
    const ElementHeight = document.getElementById('element-menu-img-size-input2').value;
    const ElementMarginTop = document.getElementById('element-menu-img-margin-input1').value;
    const ElementMarginLeft = document.getElementById('element-menu-img-margin-input2').value;
    const Element = document.getElementById(ElementId);
    Element.style.width = ElementWidth;
    Element.style.height = ElementHeight;
    Element.src = ElementSource;
    Element.style.marginTop = ElementMarginTop;
    Element.style.marginLeft = ElementMarginLeft;
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
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = CreateElementMenu.className.replace(show, unshow);
    Desactive();
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
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "black";
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
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = CreateElementMenu.className.replace(show, unshow);
    Desactive();
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
    text.style.fontSize = "50px";
    text.textContent = "Lorem Ipsum";
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
    image.src = "../assets/txt-icon-light.png";
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