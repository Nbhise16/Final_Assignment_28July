//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions
class TransferFunds {
 

  usernamedata(value) {
    const field = cy.get('.login:nth-child(2) > .input');
    field.type(value);

    return this;
  }

  passwordata(value) {
    const field = cy.xpath("//input[@name='password']");
    field.type(value);

    return this;
  }

  login() {
    const button = cy.get('input[value="Log In"]');
    button.click();
  }
  logout2() {

    const field = cy.contains("Log Out");
    field.click();

    //return this;
  }


  transfer_funds_link() {
    const link = cy.xpath("//a[contains(text(),'Transfer Funds')]");
    link.click();
  }

  //Initiate of process of funds transfer


  //Select From Account
  selectfromacct_no() {
    const field = cy.get('#fromAccountId > option')
    .eq(0)
    .then(element => cy.get('#fromAccountId').select(element.val()))
    
   // field.select("14232").should("have.value", "14232");

    // return this;
  }
  //Select To Account
  selecttoacct_no() {
    const field = cy.get('#toAccountId > option')
  .eq(1)
  .then(element => cy.get('#toAccountId').select(element.val()))
    //field.select("14454").should("have.value", "14454");
  }

  //Enter Amount to be transfer
  enter_amount(value) {
    const field = cy.get('#amount');
    field.type(value);

    return this;
  }

  //Funds Transfer Event
  transfer() {
    const amt_transfer = cy.xpath("//input[@value='Transfer']");
    amt_transfer.click();
  }
  //After successful transfer of funds - Verfiy different assertions of Text like  Transfer of funds is Complete etc.. and Title
  success_funds_transfer_message() {
    return cy.get(".title");
  }
  success_amount_transfer() {
    return cy.get('.ng-scope > p:nth-child(2)');
  }

}

export default TransferFunds;