/// <reference types="cypress" /> 
import HomeSmartcomerciCadastro from "../pages/homeLoginFrontEnd.pages"

describe("Teste de compra SmartComerci ", () =>{
    beforeEach(() =>{
        cy.visitar()
    })
      it('Logar e comprar um produto', () =>{
        HomeSmartcomerciCadastro.cadastrarUmUsuarioPessoaFisica()
        HomeSmartcomerciCadastro.comprando()
      })
  })