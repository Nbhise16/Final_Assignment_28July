//<reference types = "cypress" />
//********Imported Different Classes From "pageObjects Folder Under Integration" */
import Registration from "../pageObjects/Registration";
import OpenAccount from "../pageObjects/OpenAccount";
import TransferFunds from "../pageObjects/TransferFunds";
import UpdateProfile from "../pageObjects/UpdateProfile";

const rg = new Registration()
const si = new OpenAccount()
const up = new UpdateProfile()
const tf = new TransferFunds()

//Username Defined for all test cases to use
const un = "test216"
const pwd = "Test@123"

//******TEST SUITES**************** */

describe('Test Suites contain 4 Test cases', function () {

    //*********** DIFFERENT HOOKS ********************** */

    before('Visit URL', function () {
        // baseURL DEFINE IN CYPRESS.JSON FILE 
        cy.visit("/");
    });

    beforeEach(() => {
        cy.log('Test case Execution has started........');
    });

    afterEach(() => {
        //Logout after each test to perform different execution of test cases
        cy.contains("Log Out").should('be.visible')
            .click({ force: true })
        cy.log('Test case execution has ended!!!!!!!')
        cy.wait(1000)
    });

    after('Final Exexution', function () {
        // All Test Cases Passed 
        cy.log('All Test cases with assertions are passed')
    });

    //*********** TEST SUITES Contain 4 TEST CASES ********************** */
    //TEST CASE 1
    it('New Registration and Login with Assertions', function () {

        rg.register_link()
        rg.fnamedata('Test')
        rg.lnamedata('User')
        rg.addressdata('810 Boul')
        rg.citydata('Montreal')
        rg.addressdata1('Test 123 User')
        rg.zipcodedata('H2C1R4')
        rg.ssndata1('9897345384')
        rg.phoneNumberdata('4384569090')
        //rg.usernamedata('test216')
        rg.usernamedata(un)
        rg.passworddata(pwd)
        rg.confirmpassworddata(pwd)
        rg.register();

        // Verify through DIFFERENT ASSERTIONS to check the successful account creation

        rg.confirmationregistermessage()
        rg.confirmationregistermessage1()
        rg.navigatetoregistrationURL()
        rg.success_registration_title()

        //Test Case 4 Verify in First LOGIN

        rg.update_profile_link()
        cy.wait(2000)
        rg.updatephoneno2()
        rg.updatephoneno('111111111')
        rg.profileclick()
        rg.update_profile_link()
        cy.wait(2000)

        // Verify Updated Phone Number with Assertion
        rg.success_update_phonenumber()

    })

    //TEST CASE 2
    it('Sign In_Open new Account with Assertions', function () {
        si.usernamedata(un)
        si.passwordata(pwd)
        si.login()
        si.opennewaccount_link()
        si.selectaccounttype()
        cy.wait(1000)
        si.createsavingsacc()

        //Verify through DIFFERENT ASSERTIONS to check the successful opening of new savings account
        si.success_savings_acc_message()
        si.success_savings_acc_message1()
        si.successsignup_Url()
        si.successsignup_title()


    })
    //TEST CASE 3
    it('Transfer of funds with Assertions', function () {

        tf.usernamedata(un)
        tf.passwordata(pwd)
        tf.login()
        tf.transfer_funds_link()
        cy.wait(1000)
        tf.selectfromacct_no()
        tf.selecttoacct_no()
        tf.enter_amount('1000')
        tf.transfer()
        //Verify through DIFFERENT ASSERTIONS to check the successful transfer of funds to other account
        tf.success_funds_transfer_message()
        tf.success_amount_transfer()
        tf.successtransferfunds_title()
        tf.successtransferfunds_Url()
    })

    //TEST CASE 4
    it('New Update Profile with Assertions', function () {
        up.enterlusername(un)
        up.enterlpassword(pwd)
        up.login()
        up.update_profile_link()
        cy.wait(2000)
        up.updatephoneno2()
        up.updatephoneno('43845659090')
        up.profileclick()

        //Verify through DIFFERENT ASSERTIONS to check the successful profile update and check updated phone number
        up.successupd_msg()
        up.successupdationmessage()
        up.successupd_Url()
        up.successupd_title()
        up.update_profile_link()
        //Assertion for checking Phone number value updated -PASS matched with previous value not new updated data 
        up.success_update_phonenumber1()
        // Verify Updated Phone Number == Assertion
        //Assertion for checking Phone number value updated -FAIL Matched with new value 
        up.success_update_phonenumber()

    })
})
