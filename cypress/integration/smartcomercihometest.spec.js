/// <reference types="cypress" /> 
import HomeSmartcomerci from "../pages/home_front_end.pages"

describe("Teste da Home Smartcomerci ", () =>{
  beforeEach(() =>{
      cy.visitar()
  })
    it('verificar o funcionamento da NavBar', () =>{
      HomeSmartcomerci.validarNavBar()
    })
})