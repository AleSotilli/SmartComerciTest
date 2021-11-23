///<reference types="cypress" />
import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

Cypress.Commands.add('visitar', () => {


    cy.visit('https://701523.commercesuite.com.br')
    
})
Cypress.Commands.add('logarFrontEnd', () => {

    cy.get('[data-testid=email]').type('gabriel@qa.com')
    cy.get('[data-testid=senha]').type('teste')
    cy.get('[data-testid=entrar]').click()
    cy.url().should('contain', '/admin/home')

})
Cypress.Commands.add('logarFrontEndNoAdm', () => {

    cy.get('[data-testid=email]').type('gabriel@qa.com.br')
    cy.get('[data-testid=senha]').type('teste')
    cy.get('[data-testid=entrar]').click()
    cy.url().should('contain', '/admin/home')

})
    

Cypress.Commands.add('validarContrato',(res, schema, status) =>{
    cy.fixture(`schema/${schema}/${status}.json`).then(schema =>{
        const validate = ajv.compile(schema)
        const valid = validate(res.body)

        if(!valid){
            var errors = ''
            for(let each in validate.errors){
                let err = validate.errors[each]
                errors += `\n${err.instancePath} ${err.message}, but receive ${typeof err.data}`
                console.log(errors)
            }
            throw new Error('Contrato invalido, por favor verifique ',errors)
            
        }
        return 'Contrato valido'
    })

})

