document.addEventListener('DOMContentLoaded', function () {
    const nameElemento = document.querySelector('#name');
    const usernameElemento = document.querySelector('#username');
    const avatarElemento = document.querySelector('#avatar');
    const reposElemento = document.querySelector('#repos');
    const followingElemento = document.querySelector('#following');
    const followersElemento = document.querySelector('#followers');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/ealboliveira') // Use a API do GitHub para obter os dados
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nameElemento.innerText = json.name;
            usernameElemento.innerText = json.login;
            avatarElemento.src = json.avatar_url;
            reposElemento.innerText = json.public_repos; // Corrigido o typo aqui
            followingElemento.innerHTML = json.following;
            followersElemento.innerText = json.followers;
            linkElemento.href = json.html_url;
        })
        .catch(function (error) {
            console.error('Erro ao obter dados do GitHub:', error);
        });
});
