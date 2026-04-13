const USERNAME = "byungchan3077";
const profileUrl = `https://api.github.com/users/${USERNAME}`;
const reposUrl = `https://api.github.com/users/${USERNAME}/repos`;


async function fetchGitHubProfile() {
    try {
        const response = await fetch(profileUrl);
        const data = await response.json();
        document.getElementById("profile-container").innerHTML = `
            <img src="${data.avatar_url}" alt="profile">
            <div class="profile-info">
                <h2>${data.name}</h2>
                <p>${data.bio || "No bio available"}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            </div>
        `;
    } catch (error) {
        document.getElementById("profile-container").innerHTML =
            `<p>Failed to load profile. Please try again later.</p>`;
        console.log("Error fetching GitHub profile:", error);
    }
}
async function fetchGitHubRepos() {
    try {
        const response = await fetch(reposUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        const repos = await response.json();
        const container = document.getElementById("repos-container");

        repos.forEach((repo) => {
            const card = document.createElement("li");
            card.className = "repo-card";
            card.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || "No description"}</p>
                <div class="repo-info">
                    <span>Language: ${repo.language || "N/A"}</span>
                    <span>Stars: ${repo.stargazers_count}</span>
                    <span>Forks: ${repo.forks_count}</span>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        document.getElementById("repos-container").innerHTML =
            `<li>Failed to load repositories. Please try again later.</li>`;
        console.log("Error fetching GitHub repositories:", error);
    }
}

fetchGitHubProfile();
fetchGitHubRepos();