function adicionarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    var tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);
    
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
