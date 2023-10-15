describe('Test_№1', () => { 

    const InputData =   [                        
  {
      EMAIL: 'love@gmail.com',
      PASSWORD: 'love@gmail.com',
  },
  {
      EMAIL: 'death@gmail.com',
      PASSWORD: 'death@gmail.com',
  },
  {
    EMAIL: 'robots@gmail.com',
    PASSWORD: 'robots@gmail.com',
  },
                        ]
                        
  InputData.forEach(a =>  {
      it(`Detect ${a.EMAIL, a.PASSWORD}`, () => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log('choose Material Dark')
      cy.contains('Material Dark').click()
      cy.log('choose Forms')
      cy.get('[title="Forms"]').click()
      cy.log('choose Form Layouts')
      cy.get('[title="Form Layouts"]').click()
      cy.log('choose burger menu')
      cy.get('a.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click()

      cy.get('#inputEmail1[placeholder="Email"]').type(a.EMAIL);
      cy.get('#inputEmail1[placeholder="Email"]').should('have.value', a.EMAIL);                        
      cy.get('#inputPassword2[placeholder="Password"]').type(a.PASSWORD);
      cy.get('#inputPassword2[placeholder="Password"]').invoke('val').should('equal', a.PASSWORD);   
      
                          })  
                      })
                  })