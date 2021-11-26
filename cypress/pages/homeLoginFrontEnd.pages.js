import Base from './_base.page'
import faker from 'faker';
/// <reference types="cypress" /> 

var geradorcpf = require('faker-br');
let meuCpf = geradorcpf.br.cpf();
let meucpfempresa = geradorcpf.br();
const Email = faker.internet.email();
const lastName = faker.name.lastName();
var randomCnpj = require('faker-br');
let meucnpj = randomCnpj.br.cnpj();


const numbertelefone          = '54 5584-9467'
const numbercelular           = '54 9844-5254'
const CEP                     = '04843-425'

var escolha1 ='';var escolha2 ='';var escolha3 ='';var aux ='';var aux2; var aux3; var aux4 = ''; var aux5;

const ESCOLHA_1               ='[for="value-0"] > .ch-well > strong'
const ESCOLHA_2               ='[for="value-1"] > .ch-well > strong'
const ESCOLHA_3               ='[for="value-2"] > .ch-well > strong'

const BTNSCADASTRO            ='.info-box'
const BTNCADASTRO             ='.info-box > :nth-child(1) > :nth-child(2) > span > a'
const CMPNOME                 ='#pf_nome_cliente'
const DATA                    ='#pf_data_nascimento'
const CPF                     ='#pf_cpf_cliente'
const TELEFONECLIENTE         ='#telefone_cliente'
const CELULARCLIENTE          ='#telefone_cliente_2'
const INP_EMAIL               = '#email_cliente'
const INP_EMAIL2              = '#email_cliente2'
const INP_PASSWORD            = '#senha_cliente'
const PASSWORD2               = '#senha_cliente2'
const AvancarBotao            = '.botao-commerce-img'
const ADM_CHECKBOX            = '.site-logo > img'
const NAV_BAR                 ='.btn-search'
const BTNADCPRODUTO           = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .btn-add'
const ADCMAISPRODUTO          = '#produtos1 > .showcase-box-content > .showcase-slider > .slick-list > .slick-track > .slick-current > .product-box > .product-info-box > .product-buy > .product-buy-qnt > [data-action="plus"] > span'
const CARRINHO                = ".cart-mini"
const FINALIZARPEDIDO         = '.btn-load-more'
const CEPBTN                  = '#cart-shipping'
const BTNCONTINUA             = '.hidden-xs > .btn-next-step'
const EMAILEND                = '#login-email'
const BTNEMAILEND             = '#login-action'
const BLOCOSEMSENHA           = '.blocoAlerta'


/////Cadastro pessoa juridica
const BTNCDSTRPESSOAJURIDICA = '#PessoaJuridica > a'
const BTNRAZAOSOCIAL = '#razao_social'
const BTNINSCRICAO = '#ie'
const BTNCNPJ = '#cnpj'
const NOMECLIENTE = '#pj_nome_cliente'
const BTNCPF = '#pj_cpf_cliente'

export default class HomeSmartComerciCadastro extends Base {

  
    static validarElementos(){
        super.validarExistenciaEVisibilidadeDoElemento(BTNSCADASTRO)
        super.clickOnElement(BTNCADASTRO)
        super.validarUrl('/cadastro')
        super.validarExistenciaEVisibilidadeDoElemento(CMPNOME)
        super.validarExistenciaEVisibilidadeDoElemento(DATA)
        super.validarExistenciaEVisibilidadeDoElemento(CPF)
        super.validarExistenciaEVisibilidadeDoElemento(TELEFONECLIENTE)
        super.validarExistenciaEVisibilidadeDoElemento(CELULARCLIENTE)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAIL)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAIL2)
        super.validarExistenciaEVisibilidadeDoElemento(INP_PASSWORD)
        super.validarExistenciaEVisibilidadeDoElemento(PASSWORD2)
    }
    static cadastrarUmUsuarioPessoaFisica(){

        super.clickOnElement(BTNCADASTRO)
        super.typeValue(CMPNOME, `${faker.name.firstName()}`)
        super.typeValue(CMPNOME, ' ')
        super.typeValue(CMPNOME, lastName)
        super.typeValue(CPF, meuCpf)
        super.typeValue(TELEFONECLIENTE, numbertelefone)
        super.typeValue(CELULARCLIENTE, numbercelular)
        super.typeValue(INP_EMAIL, Email)
        super.typeValue(INP_EMAIL2, Email)
        super.typeValue(INP_PASSWORD, 'AleLindo08')
        super.typeValue(PASSWORD2, 'AleLindo08')
        super.clickOnElement(AvancarBotao)
        super.clickOnElement(ADM_CHECKBOX)
        super.validarUrl("https://701523.commercesuite.com.br/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    }

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
        super.typeValue(EMAILEND, Email)
        super.clickOnElement(BTNEMAILEND)
        cy.get(ESCOLHA_1).invoke('text').then(text => {
            escolha1 =text.slice(text.length -8)

            cy.get(ESCOLHA_2).invoke('text').then(text => {
                escolha2 =text.slice(text.length -8)

                cy.get(ESCOLHA_3).invoke('text').then(text => {
                    escolha3 =text.slice(text.length -8)

                    cy.log(escolha1); cy.log(escolha2);cy.log(escolha3)
                    aux = lastName.slice(lastName.length -4)
                    aux2 = meuCpf.slice(meuCpf.length - 4)
                    aux3 = numbertelefone.slice(0,4)
                    aux4 = numbertelefone.slice(numbertelefone.length -3)
                    aux5 = meuCpf.slice(0,3)
                    cy.log(aux, aux2, aux3, aux4, aux5)
                    if(escolha1.includes(aux) || escolha1.includes(aux2) || escolha1.includes(aux3) || escolha1.includes(aux4) || escolha1.includes(aux5) ) {
                        super.clickOnElement(ESCOLHA_1)
                    }
                    if(escolha2.includes(aux) || escolha2.includes(aux2) || escolha2.includes(aux3) || escolha2.includes(aux4) || escolha2.includes(aux5)) {
                        super.clickOnElement(ESCOLHA_2)
                    }
                    if(escolha3.includes(aux) || escolha3.includes(aux2) || escolha3.includes(aux3) || escolha3.includes(aux4) || escolha3.includes(aux5) ){
                        super.clickOnElement(ESCOLHA_3)
                    }
                    cy.wait(2000)
                    super.typeValue('#input-password', 'AleLindo08')
                    super.clickOnElement('#password-submit')

                
                });
            });
        }); 



    }

    static loginInvalidoSemSenha(){

        super.clickOnElement(BTNCADASTRO)
        super.typeValue(CMPNOME, `${faker.name.firstName()}`)
        super.typeValue(CMPNOME, ' ')
        super.typeValue(CMPNOME, lastName)
        super.typeValue(CPF, meuCpf)
        super.typeValue(TELEFONECLIENTE, numbertelefone)
        super.typeValue(CELULARCLIENTE, numbercelular)
        super.typeValue(INP_EMAIL, Email)
        super.typeValue(INP_EMAIL2, Email)
        super.clickOnElement(AvancarBotao)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        super.verifyIfElementExists(BLOCOSEMSENHA)

    }

    static cadastarUmaPessoaJuridica(){

        super.clickOnElement(BTNCADASTRO)
        super.clickOnElement(BTNCDSTRPESSOAJURIDICA)
        super.typeValue(BTNRAZAOSOCIAL, `${faker.company.companyName()}` )
        super.typeValue(BTNINSCRICAO, `${faker.random.number()}`)
        super.typeValue(BTNCNPJ, meucnpj)
        super.typeValue(NOMECLIENTE, `${faker.name.firstName()}` )
        super.typeValue(NOMECLIENTE, ' ' )
        super.typeValue(NOMECLIENTE, `${faker.name.lastName()}` )
        super.typeValue(BTNCPF, meucpfempresa)
        super.typeValue(INP_EMAIL, Email)
        super.typeValue(INP_EMAIL2, Email)
        super.typeValue(TELEFONECLIENTE, numbertelefone)
        super.typeValue(CELULARCLIENTE, numbercelular)
        super.typeValue(INP_PASSWORD, 'AleLindo08')
        super.typeValue(PASSWORD2, 'AleLindo08')
        super.clickOnElement(AvancarBotao)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })



    }
    
}