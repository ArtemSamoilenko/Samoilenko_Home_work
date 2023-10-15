describe('Test_№1', () => { 

    const InputData =   [                        
  {
      TestData: 'love@gmail.com',
      TestData1: '1234567890',
  },
  {
      TestData: 'death@gmail.com',
      TestData1: 'Just_do_it',
  },
                        ]

  InputData.forEach(test =>  {
 
  it(`test ${test.TestData, test.TestData1}`, () => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log('choose Material Dark')
      cy.contains('Material Dark').click()
  
      cy.log('choose Forms')
      cy.get('[title="Forms"]').click()
  
      cy.log('choose Form Layouts')
      cy.get('[title="Form Layouts"]').click()
    
      cy.log('choose burger menu')
      cy.get('a.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click()
 

      cy.get('#inputEmail1[placeholder="Email"]').type(test.TestData);
      cy.get('#inputEmail1[placeholder="Email"]').should('have.value', test.TestData);  
      cy.get('#inputPassword2[placeholder="Password"]').type(test.TestData1);
      cy.get('#inputPassword2[placeholder="Password"]').should('have.value', test.TestData1);  

                          })  
                      })
                  })