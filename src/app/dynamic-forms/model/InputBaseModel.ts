
import { InputType } from './input-type.enum';
export interface IInputBaseModel<T> {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    controlType?: InputType;
    options?: any;
    minLength?: number|null|undefined;
    maxLength?: number|null|undefined;
}

export class InputBaseModel<T> implements IInputBaseModel<T> {

    value: T;
    key: string;
    label: string;
    required: boolean;
    controlType: InputType;
    options?: any;
    minLength: number|null = null;
    maxLength: number|null = null;

    constructor(options: IInputBaseModel<T> = <IInputBaseModel<T>>{}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        if ( options.minLength !== null && options.minLength !== undefined ) {
            this.minLength = options.minLength;
        }
        if ( options.maxLength !== null && options.maxLength !== undefined ) {
            this.maxLength = options.maxLength;
        }
        this.controlType = options.controlType;
        this.options = options;
    }
}
