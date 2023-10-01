let show = 'show';
let unshow = 'unshow';
const CreateElementMenu = document.querySelector('#create-element-menu');
const workspace = document.querySelector('#workspace');
let elements = [];
let zoom = 0.4;
const ZoomSpeed = 0.03;
const ActiveElementListBackgroundColor = "linear-gradient(135deg, #0085ff 0%, #00ffd9 100%)";
const ElementListBackgroundColor = "linear-gradient(135deg, #242424 0%, #242424 100%)";
const BackgroundWorkspace = document.getElementById("background-workspace");


BackgroundWorkspace.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0){
        if (zoom > 0.06) {
            workspace.style.transform = `scale(${zoom -= ZoomSpeed})`;
        }
    } else {    
        workspace.style.transform = `scale(${zoom += ZoomSpeed})`;  
    }
});

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

function SaveBody() {
    const BodyWidth = document.getElementById("project-settings-size-input1").value + "px";
    const BodyHeight = document.getElementById("project-settings-size-input2").value + "px";
    const BodyBackgroundColor = document.getElementById("project-settings-background-color-input").value;
    document.documentElement.style.setProperty('--workspace-width', " " + BodyWidth);
    document.documentElement.style.setProperty('--workspace-height', " " + BodyHeight);
    workspace.style.backgroundColor = BodyBackgroundColor;
    if (BodyWidth === "px") {
        document.documentElement.style.setProperty('--workspace-width', " " + "1920px");
    }
    if (BodyHeight === "px") {
        document.documentElement.style.setProperty('--workspace-height', " " + "1000px");
    }
}

function ActiveSettings(arg) {
    const ActiveElementSettingsId = localStorage.getItem("ActiveElementSettingsId");
    const ActiveElementSettings = document.getElementById(ActiveElementSettingsId);
    if (ActiveElementSettingsId) {
        ActiveElementSettings.style.backgroundColor = "transparent";
    }
    if (arg == "project-settings") {
        const ElementList = document.getElementById("project-settings-div");
        ElementList.style.backgroundColor = "#008CFF";
        localStorage.setItem("ActiveElementSettingsId", arg)
    }
}

function ShowSettingsMenu() {
    HideCreateElementMenu();
    HideCustomCodeMenu();
    HideImageMenu();
    HideDivMenu();
    HideTextMenu();
    const SettingsMenu = document.getElementById("settings-menu");
    const SettingsButton = document.getElementById("settings-button");
    const overlay = document.getElementById("overlay");
    if (~SettingsMenu.className.indexOf(unshow)) {
        SettingsMenu.className = "show";
        ActiveSettings("project-settings");
        overlay.className = "show";
    } else {
        SettingsMenu.className = "unshow";
        overlay.className = "unshow";
    }
}

function HideSettingsMenu() {
    localStorage.removeItem("ActiveElementSettingsId");
    const SettingsMenu = document.getElementById("settings-menu");
    const overlay = document.getElementById("overlay");
    SettingsMenu.className = "unshow";
    overlay.className = "unshow";
}

function ShowCreateElementMenu() {
    const overlay = document.getElementById("overlay");
    if (~CreateElementMenu.className.indexOf(unshow)) {
        CreateElementMenu.className = CreateElementMenu.className.replace(unshow, show);
        overlay.className = "show";
    } else {
        CreateElementMenu.className = CreateElementMenu.className.replace(show, unshow);
        overlay.className = "unshow";
    }
}

function HideCreateElementMenu() {
    const overlay = document.getElementById("overlay");
    CreateElementMenu.className = "unshow";
    overlay.className = "unshow";
}

function ElementOnClick(event) {
    Active(event.target.id);
}

function ElementListOnClick(event) {
    const ElementListId = event.target.id;
    const ElementId = ElementListId.slice(0, -3);
    Active(ElementId);
}

function RemoveObjectFromArray(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
}

function DeleteElement() {
    const ActiveElementId = localStorage.getItem("ElementActive");
    localStorage.removeItem("ElementActive");
    const ActiveElement = document.getElementById(ActiveElementId);
    const ActiveElementListId = ActiveElementId + "-id";
    const ActiveElementList = document.getElementById(ActiveElementListId);
    ActiveElementList.remove();
    ActiveElement.remove();
    HideDivMenu();
    HideImageMenu();
    HideTextMenu();
    RemoveObjectFromArray(elements, ActiveElementId);
    if (elements.length === 0) {
        const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
        ElementListNoLayers.className = "show";
    }
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
    localStorage.removeItem("ElementActive");
}

function WorkspaceOnClick() {
    Desactive();
    HideImageMenu();
    HideDivMenu();
    HideCustomCodeMenu();
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
    localStorage.removeItem("ElementActive");
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

function ShowCustomCodeMenu() {
    const overlay = document.getElementById("overlay");
    const CustomCodeMenu = document.getElementById("custom-code-menu");
    if (~CustomCodeMenu.className.indexOf(unshow)) {
        CustomCodeMenu.className = CustomCodeMenu.className.replace(unshow, show);
        overlay.className = "show";
    } else {
        CustomCodeMenu.className = CustomCodeMenu.className.replace(show, unshow);
        overlay.className = "unshow";
    }
}

function HideCustomCodeMenu() {
    const CustomCodeMenu = document.getElementById("custom-code-menu");
    const overlay = document.getElementById("overlay");
    CustomCodeMenu.className = "unshow";
    overlay.className = "unshow";
}

function ShowImageMenu(arg) {
    HideCreateElementMenu();
    HideCustomCodeMenu();
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
    HideCreateElementMenu();
    const ElementMenu = document.querySelector('#element-menu-img');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateImage() {
    HideCreateElementMenu();
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = "unshow";
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
    div.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowImageMenu(ElementId);
    Active(ElementId);
    const Element = {
        tag: elements.length + 1,
        id: ElementId
    }
    elements.push(Element);
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
    HideCreateElementMenu();
    HideCustomCodeMenu();
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
    document.getElementById('element-menu-div-margin-input1').value = Element.style.marginTop;
    document.getElementById('element-menu-div-margin-input2').value = Element.style.marginLeft;
}

function HideDivMenu() {
    HideCreateElementMenu();
    const ElementMenu = document.querySelector('#element-menu-div');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateDiv() {
    HideCreateElementMenu();
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = "unshow";
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
    localStorage.removeItem("ElementActive");
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
    DivList.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowDivMenu(ElementId);
    const Element = {
        tag: elements.length + 1,
        id: ElementId
    }
    elements.push(Element);
}

function SaveDiv() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementWidth = document.getElementById('element-menu-div-size-input1').value;
    const ElementHeight = document.getElementById('element-menu-div-size-input2').value;
    const ElementBackgroundColor = document.getElementById('element-menu-div-background-color-input').value;
    const ElementMarginTop = document.getElementById('element-menu-div-margin-input1').value;
    const ElementMarginLeft = document.getElementById('element-menu-div-margin-input2').value;
    const Element = document.getElementById(ElementId);
    Element.style.width = ElementWidth;
    Element.style.height = ElementHeight;
    Element.style.backgroundColor = ElementBackgroundColor;
    Element.style.marginTop = ElementMarginTop;
    Element.style.marginLeft = ElementMarginLeft;
}

function ShowTextMenu(arg) {
    HideCreateElementMenu();
    HideCustomCodeMenu();
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
    document.getElementById('element-menu-text-margin-input1').value = Element.style.marginTop;
    document.getElementById('element-menu-text-margin-input2').value = Element.style.marginLeft;
}

function HideTextMenu() {
    HideCreateElementMenu();
    const ElementMenu = document.querySelector('#element-menu-text');
    ElementMenu.className = ElementMenu.className = "unshow";
}

function CreateText() {
    HideCreateElementMenu();
    const ElementListNoLayers = document.getElementById("elements-list-nothing-text");
    ElementListNoLayers.className = "unshow";
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
    localStorage.removeItem("ElementActive");
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
    DivList.style.backgroundImage = ActiveElementListBackgroundColor;
    ShowTextMenu(ElementId);
    const Element = {
        tag: elements.length + 1,
        id: ElementId
    }
    elements.push(Element);
}

function SaveText() {
    const ElementId = localStorage.getItem("ElementActive");
    const ElementContent = document.getElementById('element-menu-text-content-input').value;
    const ElementFont = document.getElementById('element-menu-text-font-input').value;
    const ElementSize = document.getElementById('element-menu-text-size-input').value;
    const ElementColor = document.getElementById('element-menu-text-color-input').value;
    const ElementMarginTop = document.getElementById('element-menu-text-margin-input1').value;
    const ElementMarginLeft = document.getElementById('element-menu-text-margin-input2').value;
    const Element = document.getElementById(ElementId);
    Element.textContent = ElementContent;
    Element.style.fontFamily = ElementFont;
    Element.style.fontSize = ElementSize;
    Element.style.color = ElementColor;
    Element.style.marginTop = ElementMarginTop;
    Element.style.marginLeft = ElementMarginLeft;
}
// Func Save - Looping all style values and translating that to HTML&CSS or other langs
function save() {
    //if(arg == "PROJ") {
        let i = 0;
        if (elements.length === 0) {
            console.error("Maybe you should create something...");
        } else {
            while (i < elements.length) {
                console.log(elements[i]);
                i++;
                console.log(i);
            }
        }
    //}
}

function onleave() {
    localStorage.removeItem("ElementActive");
    localStorage.removeItem("ActiveElementSettingsId");
}