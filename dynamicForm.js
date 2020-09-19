class FormElemet {
    constructor(type, label, key) {
        this.type = type;
        this.label = label;
        this.key = key;
    }
    createLabel = (label) => {
        let element = document.createElement("LABEL");
        element.innerHTML = label;
        form.appendChild(element);
        formElemet.breakLine();
    }

    breakLine = () => {
        let element = document.createElement("BR");
        form.appendChild(element);
    }
}

class LabelElement extends FormElemet {
    constructor(labelObj) {
        super(labelObj.type, labelObj.label, labelObj.key);
        this.unique = labelObj.unique;
        this.invisible = labelObj.invisible;
    }

}

class InputElement extends FormElemet {
    constructor(inputObj) {
        super(inputObj.type, inputObj.label, inputObj.key);
        this.value = inputObj.value;
        this.id = inputObj.attr.id;
        this.className = inputObj.attr.className;
        this.placeholder = inputObj.attr.placeholder;
        this.name = inputObj.attr.name;
        this.required = inputObj.attr.required;
        this.onchange = inputObj.attr.onchange;
    }
    createInput = (inputData) => {
        let element = document.createElement("INPUT");
        element.setAttribute("type", inputData.type);
        element.setAttribute("value", inputData.value);
        element.setAttribute("id", inputData.id);
        element.setAttribute("className", inputData.className);
        element.setAttribute("placeholder", inputData.placeholder);
        element.setAttribute("name", inputData.name);
        element.setAttribute("required", inputData.required);
        element.oninput = inputData.onchange;
        form.appendChild(element);
        formElemet.breakLine();
    }
}

class TextAreaElement extends FormElemet {
    constructor(textAreaObj) {
        super(textAreaObj.type, textAreaObj.label, textAreaObj.key);
        this.value = textAreaObj.value;
        this.id = textAreaObj.attr.id;
        this.className = textAreaObj.attr.className;
        this.placeholder = textAreaObj.attr.placeholder;
        this.rows = textAreaObj.attr.rows;
        this.name = textAreaObj.attr.name;
        this.required = textAreaObj.attr.required;
        this.onchange = textAreaObj.attr.onchange;
    }
    createTextarea = (textareaData) => {
        let element = document.createElement("TEXTAREA");
        element.setAttribute("value", textareaData.value);
        element.setAttribute("id", textareaData.id);
        element.setAttribute("className", textareaData.className);
        element.setAttribute("placeholder", textareaData.placeholder);
        element.setAttribute("name", textareaData.name);
        element.setAttribute("rows", textareaData.rows);
        element.setAttribute("required", textareaData.required);
        element.oninput = textareaData.onchange;
        form.appendChild(element);
        formElemet.breakLine();
    }
}

class SelectElement extends FormElemet {
    constructor(selectObj) {
        super(selectObj.type, selectObj.label, selectObj.key);
        this.value = selectObj.value;
        this.id = selectObj.attr.id;
        this.className = selectObj.attr.className;
        this.name = selectObj.attr.name;
        this.required = selectObj.attr.required;
        this.onchange = selectObj.attr.onchange;
        this.options = selectObj.options;
    }
    createSelectElement = (selectData) => {
        let element = document.createElement("SELECT");
        element.setAttribute("value", selectData.value);
        element.setAttribute("id", selectData.id);
        element.setAttribute("className", selectData.className);
        element.setAttribute("name", selectData.name);
        element.setAttribute("required", selectData.required);
        element.onchange = selectData.onchange;
        selectData.options.forEach(getOptions);
        function getOptions(item) {
            let option = document.createElement("option");
            option.text = item.value;
            option.innerHTML = item.innerHTML;
            element.add(option);
        }
        form.appendChild(element);
        formElemet.breakLine();
    }
}

class RadioInputElement extends FormElemet {
    constructor(radioObj) {
        super(radioObj.type, radioObj.label, radioObj.key);
        this.options = radioObj.options;
        // this.id = radioObj.attr.id;
        // this.className = radioObj.attr.className;
        // this.required = radioObj.attr.required;
        // this.onchange = radioObj.attr.onchange;
    }
    createRadioInput = (radioInputData) => {

        radioInputData.options.forEach(getOptions);
        function getOptions(item) {
            let element = document.createElement("input");
            element.setAttribute("type", radioInputData.type);
            // let option = document.createElement("OPTION");
            element.text = item.value;
            element.innerHTML = item.innerHTML;
            form.appendChild(element);
            // element.add(option);
        }
        formElemet.breakLine();

    }
}

class CheckboxElement extends FormElemet {
    constructor(checkboxObj) {
        super(checkboxObj.type, checkboxObj.label, checkboxObj.key);
        this.options = checkboxObj.options;
    }
    createCheckbox = (checkboxData) => {
        checkboxData.options.forEach(getOptions);
        function getOptions(item) {
            let element = document.createElement("input");
            element.setAttribute("type", checkboxData.type);
            element.innerHTML = item.innerHTML;
            element.setAttribute("id", item.attr.id);
            element.setAttribute("className", item.attr.className);
            element.onchange = item.attr.onchange;
            form.appendChild(element);
            formElemet.createLabel(item.value);
        }
        formElemet.breakLine();

    }
}

class ButtonElement extends FormElemet {
    constructor(buttonObj) {
        super(buttonObj.type, buttonObj.label, buttonObj.key);
        this.value = buttonObj.attr.value;
        this.id = buttonObj.attr.id;
        this.className = buttonObj.attr.className;
        this.name = buttonObj.attr.name;
        this.onclick = buttonObj.onclick;
    }
    createButton = (buttonData) => {
        let element = document.createElement("BUTTON");
        element.setAttribute("type", buttonData.type);
        element.setAttribute("id", buttonData.id);
        element.setAttribute("className", buttonData.className);
        element.setAttribute("name", buttonData.name);
        element.onclick = buttonData.onclick;
        element.innerHTML = buttonData.value;
        form.appendChild(element);
    }
}

addElement = () => {
    elementsArray.forEach(getElementFun);
    function getElementFun(item) {
        let labelElement = new LabelElement(item);
        if (item.type != 'submit' && item.type != 'reset') {
            labelElement.createLabel(labelElement.label);
        }
        if (item.type == 'text' || item.type == 'email' || item.type == 'tel' ||
            item.type == 'number' || item.type == 'file') {
            let inputElement = new InputElement(item);
            inputElement.createInput(inputElement);
        } else if (item.type == 'textarea') {
            let textareaElement = new TextAreaElement(item);
            textareaElement.createTextarea(textareaElement);
        } else if (item.type == 'select') {
            let selectElement = new SelectElement(item);
            selectElement.createSelectElement(selectElement);
        } else if (item.type == 'radio') {
            let radioInputElement = new RadioInputElement(item);
            radioInputElement.createRadioInput(radioInputElement);
        } else if (item.type == 'checkbox') {
            let checkboxElement = new CheckboxElement(item);
            checkboxElement.createCheckbox(checkboxElement);
        } else if (item.type == 'submit' || item.type == 'reset') {
            let buttonlement = new ButtonElement(item);
            buttonlement.createButton(buttonlement);
        }
    }
}
var form = document.getElementById("dataForm");
let formElemet = new FormElemet();
addElement();