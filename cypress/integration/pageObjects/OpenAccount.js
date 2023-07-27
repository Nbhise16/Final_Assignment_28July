//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions
class OpenAccount {


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
  //Initiate of opening new account
  opennewaccount_link() {
    const link = cy.contains('Open New Account');
    link.click();
  }

  //Select SAVINGS Account
  selectaccounttype() {
    const field = cy.get('select[id="type"]');
    field.select("1").should("have.value", "1");
  }
  //Create Savings Account
  createsavingsacc() {
    const accbtn = cy.xpath("//input[@value='Open New Account']");
    accbtn.click();
  }
  //After successful opening of New Savings Account - Verfiy different assertions of Text like Account Opened! etc.. and Title
  success_savings_acc_message() {
    return cy.xpath("//div[@id='rightPanel']/div/div/h1").should('have.text', 'Account Opened!');
  }
  success_savings_acc_message1() {
    return cy.get('.ng-scope > p:nth-child(2)').invoke('text').should('include', 'Congratulations, your account');
  }
  successsignup_title() {
    return cy.title().should("eq", "ParaBank | Open Account");
  }
  successsignup_Url() {
    return cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/openaccount.htm');
  }

}

export default OpenAccount;