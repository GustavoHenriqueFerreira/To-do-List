describe('Teste de Cadastro', () => {
  it('Preencher o formulário de cadastro', () => {
    // Visite a página de cadastro (substitua a URL pelo seu ambiente)
    cy.visit('http://localhost:3000/');
    cy.get('#nome_tarefa').type('tarefa teste');
    cy.get('.btn_cadastrar').click();
  });
});