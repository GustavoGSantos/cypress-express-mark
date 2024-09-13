/// <reference types="cypress" />

describe('tasks', ()=> {
    
    it('Should register a new task', ()=>{
        cy.visit('http://localhost:3000')

        cy.get('input[placeholder="Add a new Task"]').type('Read a node.js book')
    })
})