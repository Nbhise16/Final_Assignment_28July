//<reference types = "cypress" />
class Registration {
  

  //Click on Register link to start registration process for a new user
  register_link(value) {
    const field = cy.get('#loginPanel > :nth-child(3) > a');
    field.click();

    return this;
  }

  //Fill All mandatory details for registration
  fnamedata(value) {
    const field = cy.get('input[name="customer.firstName"]');
    field.type(value);

    return this;
  }
  lnamedata(value) {
    const field = cy.xpath("//input[@id='customer.lastName']");
    field.type(value);

    return this;
  }

  addressdata(value) {
    const field = cy.get('input[id="customer.address.street"]');
    field.type(value);

    return this;
  }
  update_profile_link(value) {
    const field = cy.contains('Update Contact Info');
    field.click();

    return this;
  }
  //Update Profile
  enterlusername(value) {
    const field = cy.get(':nth-child(2) > .input');
    field.type(value);

    return this;
  }

  enterlpassword(value) {
    const field = cy.xpath("//input[@name='password']");
    field.type(value);

    return this;
  }
  login() {
    const button = cy.get('input[value="Log In"]');
    button.click();
  }


  updatefname(value) {
    const field = cy.xpath("//input[@id='customer.firstName']");
    field.type(value);
    return this;

  }
  updatelname(value) {
    const field = cy.xpath("//input[@id='customer.lastName']");
    field.type(value);
    return this;
  }
  updateaddress(value) {
    const field = cy.xpath("//input[@id='customer.address.street']");
    field.type(value);
    return this;
  }
  updateaddresscity(value) {
    const field = cy.xpath("//input[@id='customer.address.city']");
    field.type(value);
    return this;
  }
  updateaddressstate(value) {
    const field = cy.xpath("//input[@id='customer.address.state']");
    field.type(value);
    return this;
  }
  updateaddresszipcode(value) {
    const field = cy.xpath("//input[@id='customer.address.zipCode']");
    field.type(value);
    return this;
  }
  updatephoneno(value) {
    const field = cy.xpath("//input[@id='customer.phoneNumber']");
    field.type(value);
    return this;
  }
  updatephoneno1() {
    return cy.xpath("//input[@id='customer.phoneNumber']");

  }
  profileclick() {
    const profile_btn = cy.xpath("//input[@value='Update Profile']");
    profile_btn.click();
  }
  //Assertion

  successupdationmessage() {
    return cy.xpath("//div[@id='rightPanel']/div/div/h1");
  }

  successupd_msg() {
    return cy.xpath("//div[@id='rightPanel']/div/div/p");
  }

  //Assertion for checking Phone number value updated
  Successvaluephone(myVal) {
    cy.xpath("//input[@id='customer.phoneNumber']").invoke('val').then(val => {
      const myVal = val;
      expect(myVal).to.equal('919893444567')
      return this;
    })
  }
  //==========
  citydata(value) {
    const field = cy.xpath("//input[@id='customer.address.city']");
    field.type(value);

    return this;
  }

  addressdata1(value) {
    const field = cy.get('.input').eq(6);
    field.type(value);

    return this;
  }
  zipcodedata(value) {
    const field = cy.xpath("//input[@id='customer.address.zipCode']");
    field.type(value);

    return this;
  }
  ssndata1(value) {
    const field = cy.xpath("//input[@id='customer.ssn']");
    field.type(value);

    return this;
  }
  phoneNumberdata(value) {
    const field = cy.xpath("//input[@id='customer.phoneNumber']");
    field.type(value);

    return this;
  }
  usernamedata(value) {
    const field = cy.get('input[name="customer.username"]');
    field.type(value);

    return this;
  }
  passworddata(value) {
    const field = cy.get('input[name="customer.password"]');
    field.type(value);

    return this;
  }
  confirmpassworddata(value) {
    const field = cy.get('#repeatedPassword');
    field.type(value);

    return this;
  }
  register() {
    const button = cy.get('input[value="Register"]');
    button.click();
  }
  //Assertion

  confirmationregistermessage() {
    return cy.get('.title');
  }

  confirmationregistermessage1() {
    return cy.get('#rightPanel > p');
  }

  logout() {

    const field = cy.contains("Log Out");
    field.click();

    //return this;
  }

}


export default Registration;
