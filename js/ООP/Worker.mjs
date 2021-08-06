import User from "./User.mjs";
export default class Worker extends User {
    static counter = 0;
    rate;
    #_days;
    #_retired;

    constructor(name, surname, bDate, rate, days, retired = false) {
        super(name, surname, bDate);

        let regExp = /[^\d]/g;
        if (!regExp.test(rate)) this.rate = rate;
        else this.rate = 'Wrong rate';

        if (!regExp.test(days)) this.#_days = days;
        else this.#_days = 'Wrong days';

        this.#_retired = retired;

        Worker.counter++;
    }

    get rate() {
        return this.rate;
    }

    set rate(value) {
        this.rate = value;
    }

    get days() {
        return this.#_days;
    }

    set days(value) {
        this.#_days = value;
    }

    get retired() {
        return this.#_retired;
    }

    set retired(value) {
        this.#_retired = value;
    }

    isRetired = () => this.#_retired;

    getSalary = () => {
        if (this.isRetired()) return 0;
        else return this.#_days * this.rate;
    }

};
