import { LightningElement } from 'lwc';

export default class ConditionalRenderingCMP extends LightningElement {
    myName = '';
    yourName = 'IM hidden from you.';
    showMe = false;
    handleOnChecked(event) {
        this.showMe = event.target.checked;
        this.myName = 'ConditionalRenderingCMP';
    }

}