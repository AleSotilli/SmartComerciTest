import Base from './_base.page'
import faker from 'faker';
/// <reference types="cypress" /> 

var geradorcpf = require('faker-br');
let meuCpf = geradorcpf.br.cpf();
const Email = faker.internet.email();
const numbertelefone = '54 5584-9467'
const numbercelular = '54 9844-5254'

const BTNSCADASTRO                    ='.info-box'
const BTNCADASTRO                   ='.info-box > :nth-child(1) > :nth-child(2) > span > a'
const CMPNOME                      ='#pf_nome_cliente'
const DATA                         ='#pf_data_nascimento'
const CPF                            ='#pf_cpf_cliente'
const TELEFONECLIENTE               ='#telefone_cliente'
const CELULARCLIENTE                ='#telefone_cliente_2'
const INP_EMAIL                     = '#email_cliente'
const INP_EMAIL2                     = '#email_cliente2'
const INP_PASSWORD                  = '#senha_cliente'
const PASSWORD2                 = '#senha_cliente2'
const AvancarBotao        = '.botao-commerce-img'
const ADM_CHECKBOX                  = 'data-testid=checkbox'
const ALERT                         ='.alert'
const URL_CADASTRO_VALIDO_ADM       = '/admin/home'
const URL_CADASTRO_VALIDO_NAO_ADM   ='/home'
const URL                           ='/cadastrarusuarios'
export default class HomeSmartcomerciCadastro extends Base {

  
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
        super.typeValue(CMPNOME, `${faker.name.lastName()}`)
        super.typeValue(CPF, meuCpf)
        super.typeValue(TELEFONECLIENTE, numbertelefone)
        super.typeValue(CELULARCLIENTE, numbercelular)
        super.typeValue(INP_EMAIL, Email)
        super.typeValue(INP_EMAIL2, Email)
        super.typeValue(INP_PASSWORD, 'AleLindo08')
        super.typeValue(PASSWORD2, 'AleLindo08')
        super.clickOnElement(AvancarBotao)
        cy.wait(500)

    }
    
}