import { LightningElement } from 'lwc';

export default class MultiDBCmp extends LightningElement {
    firstName = '';
    lastName = '';

    handleOnChange(event) {
        let nameIdentifier = event.target.name;
        if(nameIdentifier === 'firstName'){
            this.firstName = event.target.value;
        }else if(nameIdentifier === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    get myName(){
        return `${this.firstName} ${this.lastName}`;
    }
}