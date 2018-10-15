class Github {
    constructor() {
        this.client_id = '910c705c4798dececfd8';
        this.client_secret = 'd69ece0119e31f946305eff238c383d421ca3c75';
    }

    async getUser(username) {
        const responseUsers = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const responseRepos = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await responseUsers.json();
        const repos = await responseRepos.json();

        return {
            profile,
            repos
        }
    }
}