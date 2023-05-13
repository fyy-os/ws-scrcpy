import { ToolBoxElement } from './ToolBoxElement';

export class ToolBox {
    private readonly holder: HTMLElement;
    private readonly holder01: HTMLElement;

    constructor(list: ToolBoxElement<any>[]) {
        this.holder = document.createElement('div');
        this.holder.classList.add('control-buttons-list', 'control-wrapper');
        this.holder01 = document.createElement("div")
        this.holder01.classList.add('control-buttons-list01', 'control-wrapper');
        list.forEach((item, index) => {
            if (index == 4 || index == 5 || index == 6) {
                item.getAllElements().forEach((el) => {
                    this.holder01.appendChild(el);
                });
            }else if(index != 0  && index != 8){
                item.getAllElements().forEach((el) => {
                    this.holder.appendChild(el);
                });
            }
        });
        this.holder.appendChild(this.holder01)
    }

    public getHolderElement(): HTMLElement {
        return this.holder;
    }
    
}
