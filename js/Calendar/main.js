document.getElementById('mainButton').addEventListener('click', () => {

    let markup = ` 
    <div class="container">
    <div class="calendar">
    <div class="month">
    <i class="fas fa-angle-left prev"></i>
    <div class="date">
    <h1></h1>
    </div>
    <i class="fas fa-angle-right next"></i>
    </div>
    <div class="weekdays">
    <div>Sun</div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    </div>
    <div class="days"></div>
    </div>
    </div>`

    document.querySelector('body').innerHTML = `${markup}`;

    const date = new Date();

    const startCalendar = () => {

        date.setDate(1);

        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        const firstDayIndex = date.getDay();

        const forwardDays = 7 - lastDayIndex;

        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} ${date.getUTCFullYear()}`;

        let innerDays = '';


        for (let i = firstDayIndex; i > 0; i--) {
            innerDays += `<div class= "prev-date">${lastDay - i + 1}</div>`;
        }


        for (let i = 1; i <= lastDay; i++) {

            if (firstDayIndex === 0) {
                if (i === 1 || i === 8 || i === 15 || i === 22 || i === 29) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 1) {
                if (i === 7 || i === 14 || i === 21 || i === 28) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 2) {
                if (i === 6 || i === 13 || i === 20 || i === 27) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 3) {
                if (i === 5 || i === 12 || i === 19 || i === 26) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 4) {
                if (i === 4 || i === 11 || i === 18 || i === 25) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 5) {
                if (i === 3 || i === 10 || i === 17 || i === 24 || i === 31) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }

            if (firstDayIndex === 6) {
                if (i === 2 || i === 9 || i === 16 || i === 23 || i === 30) {
                    innerDays += `<div class= "weekends">${i}</div>`
                    continue;
                }
                if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                    innerDays += `<div class= "today">${i}</div>`
                } else {
                    innerDays += `<div class= "current-date">${i}</div>`;
                }
            }
        }


        for (let i = 1; i < forwardDays; i++) {
            innerDays += `<div class= "forward-date">${i}</div>`
        }


        document.querySelector(".days").innerHTML = innerDays;

        const currentDays = document.querySelectorAll(".current-date");

        for (let i = 0; i < currentDays.length; i++) {
            currentDays[i].addEventListener("click", () => {
                currentDays[i].style.backgroundColor = "lightskyblue";
                currentDays[i].style.color = "white";
            });
        }

        for (let i = 0; i < currentDays.length; i++) {
            currentDays[i].addEventListener("dblclick", () => {
                currentDays[i].style.backgroundColor = "white";
                currentDays[i].style.color = "black";
            });
        }

        const weekends = document.querySelectorAll(".weekends");

        for (let i = 0; i < weekends.length; i++) {
            weekends[i].addEventListener("click", () => {
                weekends[i].style.backgroundColor = "lightskyblue";
                weekends[i].style.color = "white";
            });
        }

        for (let i = 0; i < weekends.length; i++) {
            weekends[i].addEventListener("dblclick", () => {
                weekends[i].style.backgroundColor = "white";
                weekends[i].style.color = "red";
            });
        }

        const nextDays = document.querySelectorAll(".forward-date");

        for (let i = 0; i < nextDays.length; i++) {
            nextDays[i].addEventListener("click", () => {
                nextDays[i].style.backgroundColor = "lightskyblue";
                nextDays[i].style.color = "white";
            });
        }

        for (let i = 0; i < nextDays.length; i++) {
            nextDays[i].addEventListener("dblclick", () => {
                nextDays[i].style.backgroundColor = "white";
                nextDays[i].style.color = "lightslategrey";
            });
        }

        const previousDays = document.querySelectorAll(".prev-date");

        for (let i = 0; i < previousDays.length; i++) {
            previousDays[i].addEventListener("click", () => {
                previousDays[i].style.backgroundColor = "lightskyblue";
                previousDays[i].style.color = "white";
            });
        }

        for (let i = 0; i < previousDays.length; i++) {
            previousDays[i].addEventListener("dblclick", () => {
                previousDays[i].style.backgroundColor = "white";
                previousDays[i].style.color = "lightslategrey";
            });
        }

        const today = document.querySelector(".today");

        today.addEventListener("click", () => {
            today.style.backgroundColor = "lightskyblue";
            today.style.color = "white";
        });

        today.addEventListener("dblclick", () => {
            today.style.backgroundColor = "white";
            today.style.color = "lightskyblue";
        });

    }

    startCalendar();

    document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        startCalendar();
    });

    document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        startCalendar();
    });
})