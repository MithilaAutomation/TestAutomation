import { invoke } from "cypress/types/lodash";






///<referance types = "cypress"/>

/*describe('describe 01', () => {


    it('testcase', ()=>{

        cy.visit('https://www.google.com/')

        cy.title().should('eq','Google' )

            

        
        })
 
        
        
    })*/


    
///<referance types = "cypress"/>

describe('Home Page Veridication', () => {

    it('Home Page URL Verication', () => {

        let title = "Legends Tour the greatest golfing experiences for amateur golfers"

        cy.visit("https://www.google.com.sg/")

        //cy.get('/html/body/div[39]/div[2]/div/div[1]/div/div[2]/div/button[3]').click();

        cy.title().should('eq','Google')
    })
})






