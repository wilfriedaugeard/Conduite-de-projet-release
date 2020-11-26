const projectCreatedName = 'Création de projet avec cypress';
const projectNotCreatedName = 'Projet pas crée';
const projectDesc = 'On crée un projet test';
const sprintDelay = '{backspace}4';
const date = '2020-11-29';

function remplirProjetForm(name, desc, sprint, date){
    cy.get('#projectName').type(name);
    cy.get('#projectDesc').type(desc);
    cy.get('#sprintDelay').type(sprint);
    cy.get('#dateEnd').type(date);
}

function getListProj(){
    return cy.get('.table').get('.table-hover').get('tbody');
}


describe('Page d\'accueil', () => {
    it('Charge la page d\'accueil', () => {
        cy.visit('/')
        cy.url().should('contains', '/projectList')
    })

    it('Création de projet validée', () => {
        getListProj().children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            remplirProjetForm(projectCreatedName, projectDesc, sprintDelay, date);
            cy.get('.btn-success').click();
            cy.url().should('contains', '/projectList');
            getListProj().children().then(($childrenAfter) => {
                expect($childrenBefore.length + 1).to.equal($childrenAfter.length);
            })
            getListProj().should('contain', projectCreatedName)
        })
    })

    it('Création de projet annulée', () => {
        getListProj().children().then(($childrenBefore) => {
            cy.get('.btn-sm').click();
            remplirProjetForm(projectNotCreatedName, projectDesc, sprintDelay, date);
            cy.get('.btn-danger').click();
            cy.url().should('contains', '/projectList');
            getListProj().children().then(($childrenAfter) => {
                expect($childrenBefore.length).to.equal($childrenAfter.length);
            })
            getListProj().should('not.contain', projectNotCreatedName)
        })
    })
    
})