/// <reference types="cypress" />

describe('tasks', () => {
    context('register', () => {
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
    context('update', () => {
        it('Should update task to done', () => {
            const task = {
                name: 'Pay energy bill',
                is_done: false
            }

            cy.deleteTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:3000')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })
    context('delete', () => {
        it('Should delete a task', () => {
            const task = {
                name: 'Pay internet bill',
                is_done: false
            }

            cy.deleteTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:3000')

            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    })
})