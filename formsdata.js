let elementsArray = [
    {
        type: 'null',
        key: 'userId',
        label: 'User Id',
        unique: false,
        isVisible: false,
        getValue: function (elementsArray, obj) {
            // return getRandomNumber();
            return new Date().getTime();

        }
    }, {
        type: 'null',
        key: 'createdAt',
        label: 'Created At',
        isVisible: true,
        getValue: function () {
            return new Date().getTime();
        }
    },
    {
        type: 'text',
        label: 'Name',
        key: 'name',
        value: '',
        attr: {
            id: 'txtName',
            className: 'textInput',
            placeholder: 'Enter name',
            name: 'name',
            required: true,
            onchange: function (e) {
                console.log(e);
            }
        }
    },
    {
        type: 'email',
        label: 'Email',
        key: 'email',
        value: '',
        attr: {
            id: 'txtEmail',
            className: 'textInput',
            placeholder: 'Enter email',
            name: 'email',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'tel',
        label: 'Phone',
        key: 'phone',
        value: '',
        attr: {
            id: 'txtPhone',
            className: 'textInput',
            placeholder: 'Enter phone number',
            name: 'phone',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'textarea',
        label: 'Address',
        key: 'address',
        value: '',
        attr: {
            id: 'txtAddress',
            className: 'textInput',
            placeholder: 'Enter Address',
            rows: '5',
            name: 'address',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'text',
        label: 'Street Address',
        key: 'street_address',
        value: '',
        attr: {
            id: 'txtStreet',
            className: 'textInput',
            placeholder: 'Enter Street Address',
            name: 'street_address',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'text',
        label: 'City',
        key: 'city',
        value: '',
        attr: {
            id: 'txtCity',
            className: 'textInput',
            placeholder: 'Enter City',
            name: 'city',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'text',
        label: 'State',
        key: 'state',
        value: '',
        attr: {
            id: 'txtState',
            className: 'textInput',
            placeholder: 'Enter State',
            name: 'state',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'number',
        label: 'Pin Code',
        key: 'pin_code',
        value: '',
        attr: {
            id: 'txtPincode',
            className: 'textInput',
            placeholder: 'Enter Pin Code',
            name: 'pin_code',
            required: true,
            onchange: function (e) {

            }
        }
    },
    {
        type: 'select',
        label: 'Country',
        key: 'country',
        value: '',
        attr: {
            id: 'txtCountry',
            name: 'country',
            required: true,
            className: 'columns',
            onchange: function (e, d) {
                console.log(e, d)
            }
        },
        options: [
            {
                innerHTML: 'Select Country',
                value: 'select'
            },
            {
                innerHTML: 'India',
                value: 'india'
            },
            {
                innerHTML: 'United States',
                value: 'united-states'
            },
            {
                innerHTML: 'Sri Lanka',
                value: 'sri-lanka'
            }
        ]
    },
    {
        type: 'radio',
        label: 'Gender',
        key: 'gender',
        value: '',
        options: [
            {
                innerHTML: 'Male',
                value: 'male',
                name: 'gender',
                attr: {
                    id: 'male',
                    className: 'radioGender',
                    required: true,
                    onchange: function (e) {

                    }
                }
            },
            {
                innerHTML: 'Female',
                value: 'female',
                name: 'gender',
                attr: {
                    id: 'female',
                    className: 'radioGender',
                    required: true,
                    onchange: function (e) {

                    }
                }
            }
        ]
    },
    {
        type: 'file',
        key: 'file',
        label: 'select files',
        attr: {
            id: 'file',
            className: 'file',
            name: 'file',
            onchange: function (file) {
                console.log(file);
            }
        }
    },
    {
        type: 'checkbox',
        label: 'Hobbies',
        key: 'hobbies',
        value: '',
        options: [
            {
                innerHTML: 'Swimming',
                value: 'swimming',
                attr: {
                    id: 'swimming',
                    className: 'radioHobbies',
                    onchange: function (e) {
                        console.log(e)
                    }
                }
            },
            {
                innerHTML: 'Singing',
                value: 'singing',
                attr: {
                    id: 'singing',
                    className: 'radioHobbies',
                    onchange: function (e) {

                    }
                }
            },
            {
                innerHTML: 'Writing',
                value: 'writing',
                attr: {
                    id: 'writing',
                    className: 'radioHobbies',
                    onchange: function (e) {

                    }
                }
            }
        ]
    },

    {
        type: 'submit',
        attr: {
            id: 'btnSubmit',
            name: 'btnSubmit',
            className: 'submit',
            value: 'Submit',
            onclick: (e, obj, array) => {
                // e = event
                // obj = current form object
                // element array
                console.log(e);
            }
        }
    },
    {
        type: 'reset',
        attr: {
            id: 'btnReset',
            name: 'btnReset',
            className: 'reset',
            value: 'Reset',
            onclick: (e, obj, array) => {

            }
        }
    }
];

