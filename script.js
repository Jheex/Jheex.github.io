// Tudo deve ficar dentro desta função para garantir que a página já carregou
window.onload = function() {
    
    // 1. Verificação de Login (Mantendo o que você fez)
    if (localStorage.getItem("adminLogado") === "true") {
        document.body.classList.add("admin-mode");
        // Se já estiver logado, garante que o link Admin apareça sempre
        const linkAdmin = document.getElementById('admin-link');
        if (linkAdmin) linkAdmin.classList.remove('hidden');
        console.log("Sessão Admin Ativa.");
    }

    // 2. Lógica do Easter Egg corrigida
    let contador = 0;
    const botaoEasterEgg = document.getElementById('easter-egg-btn');
    const linkAdmin = document.getElementById('admin-link');

    if (botaoEasterEgg) {
        botaoEasterEgg.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que o link recarregue a página
            contador++;
            console.log("Cliques no > : " + contador);

            if (contador === 5) {
                if (linkAdmin) {
                    linkAdmin.classList.remove('hidden');
                    linkAdmin.style.display = "inline-block"; // Força a aparição
                    alert("⚠️ Modo de Acesso Administrativo Habilitado!");
                }
                contador = 0;
            }
        });
    } else {
        console.error("ERRO: O elemento 'easter-egg-btn' não foi encontrado. Verifique o ID no HTML.");
    }
};

// Função para deslogar
function logout() {
    localStorage.removeItem("adminLogado");
    window.location.href = "index.html";
}