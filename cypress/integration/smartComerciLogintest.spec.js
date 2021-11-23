/// <reference types="cypress" /> 
import HomeSmartcomerciCadastro from "../pages/homeLoginFrontEnd.pages"

describe("Teste da Home Smartcomerci ", () =>{
  beforeEach(() =>{
      cy.visitar()
  })
    it('Verificar os itens de cadastro e cadastrar um usuario', () =>{
      HomeSmartcomerciCadastro.validarElementos()
    })
    it.only("Cadastrar um usuario", () =>{
      HomeSmartcomerciCadastro.cadastrarUmUsuarioPessoaFisica()


    })
})