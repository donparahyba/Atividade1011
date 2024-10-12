document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const resultado = document.getElementById('resultado');
    const titulo = document.querySelector('h1');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const genero = document.querySelector('input[name="genero"]:checked');
        const pais = document.getElementById('pais').value;
        const comentarios = document.getElementById('comentarios').value.trim();

        if (nome === '' || email === '' || senha === '') {
            alert('Por favor, preencha todos os campos obrigatórios (Nome, Email, Senha).');
            return;
        }

        titulo.textContent = 'Formulário Enviado com Sucesso!';
        form.style.backgroundColor = '#d4edda';

        resultado.innerHTML = `
            <h2>Dados Submetidos:</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Senha:</strong> ${senha}</p>
            <p><strong>Gênero:</strong> ${genero ? genero.value : 'Não especificado'}</p>
            <p><strong>País:</strong> ${pais || 'Não especificado'}</p>
            <p><strong>Comentários:</strong> ${comentarios || 'Nenhum comentário'}</p>
        `;

        form.reset();
    });
});