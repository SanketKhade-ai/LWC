import { LightningElement } from 'lwc';

export default class DynamicBindingCmp extends LightningElement {
    myName = 'DynamicBindingCmp';
    handleOnChange(event) {
        this.myName = event.target.value;
    }
}