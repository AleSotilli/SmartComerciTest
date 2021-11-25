/// <reference types="cypress" /> 
import HomeSmartcomerciCadastro from "../pages/homeLoginFrontEnd.pages"
import SmartComerciCompra from "../pages/homeComprarFront.pages"


describe("Teste compra SmartComerci ", () =>{
    beforeEach(() =>{
        cy.visitar()
    })
      it('Logar e comprar um produto', () =>{
        HomeSmartcomerciCadastro.cadastrarUmUsuarioPessoaFisica()
        HomeSmartcomerciCadastro.comprando()
      })
  })