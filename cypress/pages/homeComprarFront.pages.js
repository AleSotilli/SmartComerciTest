import Base from './_base.page'

const NAV_BAR                       ='.btn-search'
const BTNADCPRODUTO =   '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .btn-add'
const ADCMAISPRODUTO =  '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .product-buy-qnt > [data-action="plus"] > span'
const CONFIRMACOMPRA =   '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .product-buy-qnt > #qtd27'
const CARRINHO =         ".cart-mini"
const FINALIZARPEDIDO = '.btn-load-more'
const CEPBTN  = '#cart-shipping'
const CEP = '95300-000'
const BTNCONTINUA = '.hidden-xs > .btn-next-step'


export default class SmartComerciCompra extends Base {

    
    static comprando(){
        super.validarExistenciaEVisibilidadeDoElemento(NAV_BAR)
        super.clickOnElement(BTNADCPRODUTO)
        super.clickOnElement(ADCMAISPRODUTO)
        super.clickOnElement(CARRINHO)
        super.clickOnElement(FINALIZARPEDIDO)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        super.typeValue(CEPBTN, CEP)
        super.clickOnElement(BTNCONTINUA)



    }
}