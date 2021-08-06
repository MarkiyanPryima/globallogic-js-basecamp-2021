class Chat {

    getMessage = async () => {
        let response = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1');
        // Використовував цю Api, тому що та, яка була в завданні не працювала)

        if (response.ok) {
            return response.json();
        } else return new Error('Error');
    }

    createMessage = (user) => {
        this.getMessage().then(resultMessages => {
            const chat = document.getElementById('chat');
            let message = document.createElement('div');
            message.innerHTML = `<img src="${user.avatar}"><span class="name">${user.firstName + ' ' + user.lastName}</span><span class="age">Age: ${user.age}</span><span class="text">${resultMessages}</span>`
            message.classList.add('message');
            chat.appendChild(message);
        })
    }

}

class User {

    getUser = async () => {
        let response = await fetch('https://randomuser.me/api');

        if (response.ok) {
            return response.json();
        } else return new Error('Error');
    }

    createUser = () => {

        this.getUser().then(resultUsers => {

            this.userInfo = {
                'avatar': resultUsers.results[0].picture.medium,
                'firstName': resultUsers.results[0].name.first,
                'lastName': resultUsers.results[0].name.last,
                'age': resultUsers.results[0].dob.age,
                'city': resultUsers.results[0].location.city,
                'phoneNumber': resultUsers.results[0].cell,
            };

            const users = document.getElementById('users');
            let user = document.createElement('div');
            user.innerHTML = `<img src="${this.userInfo.avatar}"><span class="name">${this.userInfo.firstName + ' ' + this.userInfo.lastName}</span><span class="city">City: ${this.userInfo.city}</span><span class="phone">Phone: ${this.userInfo.phoneNumber}</span>`
            user.classList.add('user');
            users.appendChild(user);

        })

    }

    sendMessage = () => {

        setInterval(() => {
            const chat = new Chat();
            chat.createMessage(this.userInfo);
        }, Math.floor(Math.random() * (25) + 5) * 1000);
    }

}

document.querySelector('button').addEventListener('click', () => {

    let u = new User();
    u.createUser();
    u.sendMessage();
})
