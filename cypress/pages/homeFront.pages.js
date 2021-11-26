import Base from './_base.page'

const NAV_BAR                      ='.btn-search'
const BOTAOFRUTAS                  ='.menu-categories > :nth-child(1) > :nth-child(1) > span'
const BOTAOBEBIDAS                 ='.menu-categories > :nth-child(2) > a > span'
const BOTAOVERDURAS                =':nth-child(3) > a > span'
const BOTAOFRIOS                   =':nth-child(4) > a > span'
const BOTAOPESCADOS                ='.menu-categories > :nth-child(5) > :nth-child(1) > span'
const BOTAOPADARIA                 =':nth-child(6) > a > span'
const BOTAOCONGELADOS              =':nth-child(7) > a > span'
const BOTAODOCERIA                 =':nth-child(8) > a > span'
const BOTAOLIMPEZA                 =':nth-child(9) > a > span'
const BOTAOMERCEARIA               =':nth-child(10) > a > span'
const BOTAOPETSHOP                 =':nth-child(11) > a > span'
const BOTAOACOUGUE                 =':nth-child(12) > a > span'

///// Adicionando produtos
const PRODUTO1                      = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .btn-add'
const PRODUTO2                      = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > [data-slick-index="1"] > .product-box > .product-info-box > .product-buy > .btn-add'
const PRODUTO3                      = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > [data-slick-index="2"] > .product-box > .product-info-box > .product-buy > .btn-add'
const PRODUTO4                      = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > [data-slick-index="3"] > .product-box > .product-info-box > .product-buy > .btn-add'
const BTNMEIO                       = '#slick-slide11 > button'
const PRODUTO5                      = '[aria-describedby="slick-slide15"] > .product-box > .product-info-box > .product-buy > .btn-add'
const CARRINHO                      = '.cart-mini'
const BTNMAIS                       = '[aria-describedby="slick-slide15"] > .product-box > .product-info-box > .product-buy > .product-buy-qnt > [data-action="plus"] > span'
const BTNCLEAR                      = '.btn-clear'
const CARCLEAR                      = '#list-cart > span'

export default class HomeSmartcomerci extends Base {

    
    static validarAbadeProdutos(){
        super.validarExistenciaEVisibilidadeDoElemento(NAV_BAR)
        super.clickOnElement(BOTAOFRUTAS)
        super.validarUrl('/frutas')
        super.clickOnElement(BOTAOBEBIDAS)
        super.validarUrl("/bebidas")
        super.clickOnElement(BOTAOVERDURAS)
        super.validarUrl('/verduras')
        super.clickOnElement(BOTAOFRIOS)
        super.validarUrl("/frios-laticinios")
        super.clickOnElement(BOTAOPESCADOS)
        super.validarUrl('/pescados')
        super.clickOnElement(BOTAOPADARIA)
        super.validarUrl("/padaria")
        super.clickOnElement(BOTAOCONGELADOS)
        super.validarUrl("/congelados")
        super.clickOnElement(BOTAODOCERIA)
        super.validarUrl("/doceria")
        super.clickOnElement(BOTAOLIMPEZA)
        super.validarUrl("/limpeza")
        super.clickOnElement(BOTAOMERCEARIA)
        super.validarUrl("/mercearia")
        super.clickOnElement(BOTAOPETSHOP)
        super.validarUrl("/petshop")
        super.clickOnElement(BOTAOACOUGUE)
        super.validarUrl("/acougue")
            
    }

    static adicionareLimparCarrinho() {
        super.validarExistenciaEVisibilidadeDoElemento(NAV_BAR)
        super.clickOnElement(PRODUTO1)
        super.clickOnElement(PRODUTO2)
        super.clickOnElement(PRODUTO3)
        super.clickOnElement(PRODUTO4)
        super.clickOnElement(BTNMEIO)
        super.clickOnElement(PRODUTO5)
        cy.wait(2000)
        super.clickOnElement(BTNMAIS)
        super.clickOnElement(BTNMAIS)
        super.clickOnElement(CARRINHO)
        cy.wait(2000)
        super.clickOnElement(BTNCLEAR)
        super.verifyIfElementExists(CARCLEAR)


    }
       
        
    
    
}