export default class University {
    name;
    city;
    zipCode;

    constructor(name, city, zipCode) {
        let regExp = /[^a-z -]/i;
        if (name.length <= 128 && !regExp.test(name)) {
            this.name = name;
        } else {
            this.name = 'Wrong name';
        }

        this.city = city;

        let regExp2 = /[^\d]/g;
        if (!regExp2.test(zipCode)) {
            let zipCodeTostr = zipCode.toString();
            let correctZipCode = '';
            for (let i = 0; i < 5; i++) {
                correctZipCode += zipCodeTostr[i];
            }
            this.zipCode = +correctZipCode;
        } else {
            this.zipCode = 'Wrong zipCode';
        }
    }

    get zipCode() {
        return this.zipCode;
    }

    set zipCode(value) {
        this.zipCode = value;
    }

    get city() {
        return this.city;
    }

    set city(value) {
        this.city = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    getAddress = () => `${this.name} - ${this.city.toUpperCase()} - ${this.zipCode}`;
};
