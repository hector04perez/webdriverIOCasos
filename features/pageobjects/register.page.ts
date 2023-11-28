import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputName() {
        return $('[name="Nombre"]');
    }
    
    public get inputApellido() {
        return $('[name="Apellido"]');
    }
    
    public get inputEmail() {
        return $('[name="Email"]');
    }
    
    public get inputPassword() {
        return $('[name="password"]');
    }
    public get inputFechaNacimiento() {
        return $('[name="Fecha_Nacimiento"]');
    }

    public get inputTelefono() {
        return $('[name="Telefono"]');
    }

    public get inputClaveU() {
        return $('[name="claveUsuarioU"]');
    }

    public get inputResId() {
        return $('[name="restauranteId"]');
    }
    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to register using username and password
     */
    public async register (Nombre: string, Apellido: string, Email: string, password: string, Fecha_Nacimiento: string, Telefono: string, claveUsuarioU: string, restauranteId: string) { 
        await this.inputName.setValue(Nombre);
        await this.inputApellido.setValue(Apellido);
        await this.inputEmail.setValue(Email);
        await this.inputPassword.setValue(password);
        await this.inputFechaNacimiento.setValue(Fecha_Nacimiento);
        await this.inputTelefono.setValue(Telefono);
        await this.inputClaveU.setValue(claveUsuarioU);
        await this.inputResId.selectByVisibleText(restauranteId);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('register');
    }
}

export default new RegisterPage();
