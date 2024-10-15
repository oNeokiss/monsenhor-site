document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de credenciais (usuário e senha)
    const validCredentials = {
        username: 'Leonardo',
        password: '123456'
    };

    if (username === validCredentials.username && password === validCredentials.password) {
        // Redirecionar para a página principal (ou dashboard)
        window.location.href = 'dashboard.html'; // Aqui você pode mudar o redirecionamento
    } else {
        // Exibir mensagem de erro
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }
});
