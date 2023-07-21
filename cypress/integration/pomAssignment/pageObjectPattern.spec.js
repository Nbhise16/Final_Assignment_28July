//<reference types = "cypress" />
import Registration from "../pageObjects/Registration";
import SignInPage from "../pageObjects/SignInPage";
import TransferFunds from "../pageObjects/TransferFunds";
const tf = new TransferFunds()
const rg = new Registration()
const si = new SignInPage()


describe('Test Suites 4 Test cases', function () {
    before('Visit URL', function () {
        // baseURL DEFINE IN CYPRESS.JSON FILE 
        cy.visit("/");
    });

    beforeEach(() => {
        cy.log('Test case Execution has started');
    });

    afterEach(() => {
        //Logout after each test to perform different execution of test cases
        cy.contains("Log Out").should('be.visible')
            .click({ force: true })
        cy.log('Test case execution has ended')
        cy.wait(1000)
    });

    after('Final Exexution', function () {
        // All Test Cases Passed 
        cy.log('All Test cases with assertions are passed')
    });

    //========
    //TEST CASE 1
    it('New Registration and Login with Assertions', function () {

        rg.register_link()
        rg.fnamedata('Test')
        rg.lnamedata('User')
        rg.addressdata('810 Boul Henri-Bourassa Est')
        rg.citydata('Montreal')
        rg.addressdata1('Test 123 User')
        rg.zipcodedata('H2C1R4')
        rg.ssndata1('9897345384')
        rg.phoneNumberdata('+1438-456-9090')
        rg.usernamedata('test113')
        rg.passworddata('Test@')
        rg.confirmpassworddata('Test@')
        rg.register();

        // Verify through DIFFERENT ASSERTIONS to check the successful account creation

        rg.confirmationregistermessage().invoke('text').should('include', 'Welcome ');
        rg.confirmationregistermessage1().should('have.text', 'Your account was created successfully. You are now logged in.');
        cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/register.htm');
        cy.title().should("eq", "ParaBank | Customer Created")

    })

    //TEST CASE 2
    it('Sign In_Open new Account with Assertions', function () {

        si.usernamedata('test113')
        si.passwordata('Test@')
        si.login();
        si.opennewaccount_link();
        si.selectaccounttype();
        cy.wait(1000);
        si.createsavingsacc();
        // Verify through DIFFERENT ASSERTIONS to check the successful opening of new savings account
        si.success_savings_acc_message().should('have.text', 'Account Opened!');
        si.success_savings_acc_message1().invoke('text').should('include', 'Congratulations, your account');
        cy.title().should("eq", "ParaBank | Open Account")

    })

    // TEST CASE 3
    it('Transfer of funds with Assertions', function () {

        tf.usernamedata('test113')
        tf.passwordata('Test@')
        tf.login();
        tf.transfer_funds_link();
        cy.wait(1000);
        tf.selectfromacct_no();
        tf.selecttoacct_no();
        tf.enter_amount('1000');
        tf.transfer();
        tf.success_funds_transfer_message().should('have.text', 'Transfer Complete!');
        tf.success_amount_transfer().invoke('text').should('include', 'has been transferred from account');
        cy.title().should("eq", "ParaBank | Transfer Funds")

    })

    //TEST CASE 4
    it('New Update Profile with Assertions', function () {

        rg.enterlusername('test113')
        rg.enterlpassword('Test@')
        rg.login()
        rg.update_profile_link()
        rg.updatefname('Test updated')
        rg.updatelname('User updated')
        rg.updateaddress('810 Boul Henri-Bourassa Est Updated')
        rg.updateaddresscity('Montreal Update')
        rg.updateaddressstate('Quebec')
        rg.updateaddresszipcode('T4F5FT')
        rg.updatephoneno('+919893444567')
        cy.wait(1000)
        //Verify Updated Phone Number
        rg.updatephoneno1().should('have.value', '+919893444567');
        rg.profileclick()

        // Verify through DIFFERENT ASSERTIONS to check the successful profile update and check updated phone number
        rg.successupdationmessage().should('have.text', 'Profile Updated');
        rg.successupd_msg().invoke('text').should('include', 'have been added to the system.');
        cy.title().should("eq", "ParaBank | Update Profile")
        rg.update_profile_link()

        //Check that the Phone number is update successfully
        cy.xpath("//input[@id='customer.phoneNumber']").should('have.value', '+1438-456-9090');

        // Verify through DIFFERENT ASSERTIONS to check the successful update profile with URL and TITLE

        cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
        cy.title().should("eq", "ParaBank | Update Profile")
    })


})
