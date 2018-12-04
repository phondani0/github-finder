document.querySelector('#search-user').addEventListener('click', findUser);

function findUser() {
    const userName = document.getElementById('username').value;
    if (userName != "") {
        document.getElementById('search-result').style.display = 'none';
        document.getElementById('progress-bar').style.display = 'block';
        document.getElementById('progress-bar').innerHTML = `
            <img src="./img/loading.gif" alt="Loading...">
        `;

        const github = new Github();
        github.getUser(userName)
            .then((data) => {
                if (data.profile.message === 'Not Found') {
                    throw new Error;
                } else {
                    renderProfile(data.profile);
                    return data.repos;
                }
            })
            .then((repos) => {
                renderRepos(repos);
                document.getElementById('progress-bar').style.display = 'none';
            })
            .catch((err) => {
                console.log(err);
                document.getElementById('progress-bar').style.display = 'none';
                showErrors('user not found.');
            })

    } else {
        document.getElementById('search-result').style.display = 'none';
    }
}