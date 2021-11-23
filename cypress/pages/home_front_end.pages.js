import Base from './_base.page'

const NAV_BAR                       ='.btn-search'

export default class HomeSmartcomerci extends Base {

    
    static validarNavBar(){
        super.validarExistenciaEVisibilidadeDoElemento(NAV_BAR)
        super.clickOnElement('.menu-categories > :nth-child(1) > :nth-child(1) > span')
        super.validarUrl('/frutas')
        super.clickOnElement('.menu-categories > :nth-child(2) > a > span')
        super.validarUrl("/bebidas")
        super.clickOnElement(':nth-child(3) > a > span')
        super.validarUrl('/verduras')
        super.clickOnElement(':nth-child(4) > a > span')
        super.validarUrl("/frios-laticinios")
        super.clickOnElement('.menu-categories > :nth-child(5) > :nth-child(1) > span')
        super.validarUrl('/pescados')
        super.clickOnElement(':nth-child(6) > a > span')
        super.validarUrl("/padaria")
        super.clickOnElement(':nth-child(7) > a > span')
        super.validarUrl("/congelados")
        super.clickOnElement(':nth-child(8) > a > span')
        super.validarUrl("/doceria")
        super.clickOnElement(':nth-child(9) > a > span')
        super.validarUrl("/limpeza")
        super.clickOnElement(':nth-child(10) > a > span')
        super.validarUrl("/mercearia")
        super.clickOnElement(':nth-child(11) > a > span')
        super.validarUrl("/petshop")
        super.clickOnElement(':nth-child(12) > a > span')
        super.validarUrl("/acougue")
            
        }
       
        
    
    
}