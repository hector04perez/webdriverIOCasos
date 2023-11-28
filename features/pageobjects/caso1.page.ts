import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputName () {
        return $('#first-name');
    }

    public get inputLastName () {
        return $('#last-name');
    }

    public get inputTitle () {
        return $('#job-title');
    }

    public get selectLevel() {
        return $('#radio-button-2');
    }

    public get selectSex() {
        return $('#checkbox-1');
    }

    
    public get inputYear() {
        return $('#select-menu');
    }

    public get inputDate() {
        return $('#datepicker');
    }

    public get btnSave () {
        return $('a=Submit');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to register using username and password
     */
    
    public async login (Name: string, LastName: string, Title: string, Years: string, Date: string) { 
        // Inicio de sesion
        await (await this.inputName).setValue(Name);
        await (await this.inputLastName).setValue(LastName);
        await (await this.inputTitle).setValue(Title);
        await this.selectLevel.click();
        await this.selectSex.click();
        (await this.inputYear).setValue(Years);
        (await this.inputDate).setValue(Date);
        await browser.pause(2000);
        await this.btnSave.click()
    }
    
    

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();