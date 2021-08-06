import User from "./User.mjs";
export default class Student extends User {
    static counter = 0;
    #_year;
    #_university;

    constructor(name, surname, bDate, year, university) {
        super(name, surname, bDate);

        let regExp = /[^\d]/g;
        if (!regExp.test(year) && +year >= 1900 && +year <= new Date().getFullYear() && year.toString().length <= 4) {
            this.#_year = +year;
        } else {
            this.#_year = 'Wrong year';
        }

        if (typeof university === 'undefined') this.#_university = 'Unknown University';
        else this.#_university = university.name;

        this._year = year;

        Student.counter++;
    }

    get year() {
        return this.#_year;
    }

    set year(value) {
        this.#_year = value;
    }

    get university() {
        return this.#_university;
    }

    set university(value) {
        this.#_university = value;
    }

    getCourse = () => {
        if (new Date().getFullYear() - this.#_year <= 6) return new Date().getFullYear() - this.#_year;
        else return `The student has already finished the university`;
    }

    isFinished  = () => {
        if (new Date().getFullYear() - this.#_year <= 6) return false;
        else return true;
    }

    static getCounter = () => this.counter;

    getFullInfo = () => `${this.getInfo()}, ${this.#_university}, ${this.#_year}`;
};
