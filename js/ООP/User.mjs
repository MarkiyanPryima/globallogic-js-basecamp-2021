export default class User {
    #_name;
    #_surname;
    #_bDate;

    constructor(name, surname, bDate) {
        let regExp = /[^a-z-]/i;
        if (name.length <= 32 && !regExp.test(name)) {
            this.#_name = name;
        } else {
            this.#_name = 'Wrong name';
        }

        if (surname.length <= 64 && !regExp.test(surname)) {
            this.#_surname = surname;
        } else {
            this.#_surname = 'Wrong surname';
        }

        let regExp2 = /[^\d]/g;
        if (!regExp2.test(bDate) && +bDate <= new Date().getFullYear() && bDate.toString().length <= 4) {
            this.#_bDate = +bDate;
        } else {
            this.#_bDate = 'Wrong bDate';
        }
    }

    get name() {
        return this.#_name;
    }

    set name(value) {
        this.#_name = value;
    }

    get surname() {
        return this.#_surname;
    }

    set surname(value) {
        this.#_surname = value;
    }

    get bDate() {
        return this.#_bDate;
    }

    set bDate(value) {
        this.#_bDate = value;
    }

    getFullName = () => `${this.#_name} ${this.#_surname}`;

    getInfo = () => `${this.#_name} ${this.#_surname}, ${this.#_bDate}`;
};


