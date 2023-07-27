//<reference types = "cypress" />
class UpdateProfile {


    //Click on Register link to start registration process for a new user
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
    updatephoneno2() {
        const field = cy.xpath("//input[@id='customer.phoneNumber']");
        field.clear();
    }
    updatephoneno1() {
        return cy.xpath("//input[@id='customer.phoneNumber']");

    }
    profileclick() {
        const profile_btn = cy.xpath("//input[@value='Update Profile']");
        profile_btn.click();
    }
    update_profile_link() {
        const field = cy.contains('Update Contact Info');
        field.click();
    }
    ////Verify with different ASSERTIONS

    successupdationmessage() {
        return cy.xpath("//div[@id='rightPanel']/div/div/h1").should('have.text', 'Profile Updated');;
    }

    successupd_msg() {
        return cy.xpath("//div[@id='rightPanel']/div/div/p").invoke('text').should('include', 'have been added to the system.');
    }
    successupd_title() {
        return cy.title().should("eq", "ParaBank | Update Profile");
    }
    successupd_Url() {
        return cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/updateprofile.htm');
    }

    //Assertion for checking Phone number value updated -FAIL
    success_update_phonenumber() {
        return cy.xpath("//input[@id='customer.phoneNumber']").should('have.value', '43845659090');
    }
    //Assertion for checking Phone number value updated -PASS
    success_update_phonenumber1() {
        return cy.xpath("//input[@id='customer.phoneNumber']").should('have.value', '111111111');
    }

}

export default UpdateProfile;
