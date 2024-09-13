/// <reference types="cypress" />

describe('tasks', () => {

    it('Should register a new task', () => {
        const taskName = 'Read a node.js book'

        cy.deleteTaskByName(taskName)
        cy.createTask(taskName)

        cy.contains('main > div > p', taskName)
            .should('be.visible')
    })

    it('Should not allow duplicated task', () => {
        const task = {
            name: 'Study javascript',
            is_done: false
        }

        cy.deleteTaskByName(task.name)
        cy.postTask(task)
        cy.createTask(task.name)

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })

    it('Required field', () => {
        cy.createTask()

        cy.verifyIsRequired('This is a required field')
    })
})