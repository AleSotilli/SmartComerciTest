/// <reference types="cypress" /> 
import HomeSmartcomerci from "../pages/homeFront.pages"

describe("Teste da Home Smartcomerci ", () =>{
  beforeEach(() =>{
      cy.visitar()
  })
    it('Verifica o funcionamento das abas de produtos', () =>{
      HomeSmartcomerci.validarAbadeProdutos()
    })

    it('Adiciona produtos ao carrinho e limpa o mesmo', () =>{
      HomeSmartcomerci.adicionareLimparCarrinho()
    })
})