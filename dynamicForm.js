class FieldElement {
    setAttributes = (inputElement, item) => {
        inputElement.classList.add('form-control');
        inputElement.setAttribute("type", item.type);
        inputElement.setAttribute("value", item.value);
        inputElement.setAttribute("id", item.attr.id);
        inputElement.setAttribute("className", item.attr.className);
        if (item.attr.placeholder)
            inputElement.setAttribute("placeholder", item.attr.placeholder);
        if (item.attr.name)
            inputElement.setAttribute("name", item.attr.name);
        if (item.attr.required)
            inputElement.setAttribute("required", item.attr.required);
        return inputElement;
    }

    buildElement = (elementData) => {
        let element = document.createElement("div");
        element.classList.add('form-group');
        let label, inputElement;
        if(elementData.label){
            label = document.createElement("label");
            label.innerHTML = elementData.label;
        }
        if (elementData.type == 'text' || elementData.type == 'email' || elementData.type == 'tel' ||
            elementData.type == 'number' || elementData.type == 'file') {
            inputElement = document.createElement('input');
            inputElement.oninput = elementData.attr.onchange;
            inputElement = this.setAttributes(inputElement, elementData);
        } else if (elementData.type == 'textarea') {
            inputElement = document.createElement('TEXTAREA');
            inputElement.oninput = elementData.attr.onchange;
            inputElement = this.setAttributes(inputElement, elementData);
        } else if (elementData.type == 'select') {
            inputElement = document.createElement("SELECT");
            inputElement.onchange = elementData.attr.onchange;
            inputElement = this.setAttributes(inputElement, elementData);
            elementData.options.forEach(getOptions);
            function getOptions(item) {
                let option = document.createElement("option");
                option.text = item.value;
                option.innerHTML = item.innerHTML;
                inputElement.add(option);
            }
        } else if (elementData.type == 'radio') {
            inputElement = document.createElement("div");
            inputElement.classList.add('form-group');
            inputElement.classList.add('form-check');
            elementData.options.forEach(getOptions);
            function getOptions(item) {
                let radioElement = document.createElement("input");
                radioElement.setAttribute("type", 'radio');
                radioElement.classList.add('form-check-input');
                radioElement.setAttribute("name", item.name);
                radioElement.setAttribute("value", item.value);
                radioElement.setAttribute("id", item.attr.id);
                radioElement.setAttribute("className", item.attr.className);
                radioElement.setAttribute("required", item.attr.required);
                radioElement.onchange = item.attr.onchange;
                let radioLabel = document.createElement("label");
                radioLabel.innerHTML = item.innerHTML;
                radioLabel.classList.add('form-check-label');
                inputElement.appendChild(radioElement);
                inputElement.appendChild(radioLabel);
            }
        } else if (elementData.type == 'checkbox') {
            inputElement = document.createElement("div");
            inputElement.classList.add('form-group');
            elementData.options.forEach(getOptions);
            function getOptions(item) {
                let checkElement = document.createElement("input");
                checkElement.setAttribute("type", 'checkbox');
                checkElement.innerHTML = item.innerHTML;
                checkElement.classList.add('form-check-input');
                checkElement.setAttribute("id", item.attr.id);
                checkElement.setAttribute("value", item.value);
                checkElement.setAttribute("className", item.attr.className);
                checkElement.onchange = item.attr.onchange;
                let checkboxLabel = document.createElement("label");
                checkboxLabel.innerHTML = item.innerHTML;
                checkboxLabel.classList.add('form-check-label');
                inputElement.appendChild(checkElement);
                inputElement.appendChild(checkboxLabel);
            }
        } else if (elementData.type == 'submit' || elementData.type == 'reset') {
            element.classList.add('btn-group');
            inputElement = document.createElement("BUTTON");
            inputElement.classList.add('btn-toolbar');
            inputElement.onclick = elementData.attr.onchange;
            inputElement.innerHTML = elementData.attr.value;
            inputElement = this.setAttributes(inputElement, elementData);
        }
        if(elementData.label)
            element.appendChild(label);
        element.appendChild(inputElement);
        return element;
    }
    emptyELement = (item) => {
        let element = document.createElement("div");
        element.classList.add('form-group');
        let label = document.createElement("label");
        label.innerHTML = item.label;
        if (!item.isVisible) {
            label.style.visibility = "hidden"
        }
        element.appendChild(label);
        return element;
    }
}

addElement = () => {
    var formElement = document.getElementById("dataForm");
    var element;
    let fieldElement = new FieldElement();
    elementsArray.forEach(getElementFun);
    function getElementFun(item) {
        if (item.type == 'null') {
            element = fieldElement.emptyELement(item);
            formElement.appendChild(element);
        } else {
            element = fieldElement.buildElement(item);
            formElement.appendChild(element);
        }
    }
}
addElement();
