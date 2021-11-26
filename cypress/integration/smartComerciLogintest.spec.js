/// <reference types="cypress" /> 
import HomeSmartComerciCadastro from "../pages/homeLoginFrontEnd.pages"

describe("Teste de login SmartComerci", () =>{
  beforeEach(() =>{
      cy.visitar()
  })
    it('Verificar os itens de cadastro e cadastrar um usuario', () =>{
      HomeSmartComerciCadastro.validarElementos()
    })
    it("Cadastrar um usuario", () =>{
      HomeSmartComerciCadastro.cadastrarUmUsuarioPessoaFisica()


    })


    it("Cadastrar um usuario sem senha", () =>{
      HomeSmartComerciCadastro.loginInvalidoSemSenha()

    })

    it("Cadastrar uma pessoa juridica",() => {
      HomeSmartComerciCadastro.cadastarUmaPessoaJuridica()
    })
})