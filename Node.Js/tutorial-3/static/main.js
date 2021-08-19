const group_A = document.getElementById('group_A');
const group_B = document.getElementById('group_B');
const group_C = document.getElementById('group_C');
const group_D = document.getElementById('group_D');

const teamsUl = document.getElementById('teams');


async function getGroup(group) {
    result = await fetch(`/api/${group}`);

    result.json().then(teams => {
        let ulElements = teams.map(team => {
            let element = document.createElement('li');
            element.innerHTML = `${team.name} | Country: ${team.country}`;
            return element;
        });

        teamsUl.innerHTML = '';
        teamsUl.append(...ulElements);
    })
}

try {
    group_A.onclick = () => getGroup('A');
    group_B.onclick = () => getGroup('B');
    group_C.onclick = () => getGroup('C');
    group_D.onclick = () => getGroup('D');
} catch (error) {
    alert(error);
}

