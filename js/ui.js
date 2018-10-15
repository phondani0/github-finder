function renderProfile(user) {

    document.getElementById('search-result').style.display = 'block';
    document.getElementById('avatar').innerHTML = `<img src="${user.avatar_url}" alt="${user.name}">`;
    document.getElementById('profile-name').innerHTML = user.name;
    document.querySelector('#view-profile a').setAttribute('href', user.html_url);

    let profile = '';

    profile = `
            <div class="list-group">
                <div class="list-group-item py-3">Company: ${user.company}</div>
                <div class="list-group-item py-3">Website/blog: ${user.blog}</div>
                <div class="list-group-item py-3">Location: ${user.location}</div>
                <div class="list-group-item py-3">Member since: ${user.created_at.substring(0, 10)}</div>
            </div>
         `;
    document.getElementById('profile').innerHTML = profile;
}

function renderRepos(repos) {
    let reposContainer = document.getElementById('repo');
    reposContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        if (repos[i]) {
            reposContainer.innerHTML += `
                <div class="card my-2">
                    <div class="card-body py-3">
                        <a href="${repos[i].html_url}" target="_blank">${repos[i].name}</a>
                    </div>
                </div>
            `
        }
    }
}

function showErrors(errMsg) {
    const el = document.getElementById('error-block');
    el.innerHTML = `<div class="text-center bg-danger py-2 text-light border rounded">${errMsg}</div>`;
    setTimeout(() => {
        el.innerHTML = "";
    }, 3000);
}