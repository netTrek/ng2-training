/**
 * Created by suenlue on 17.04.17.
 */
import { IInputBaseModel, InputBaseModel } from './InputBaseModel';
import { InputType } from './input-type.enum';
/**
 * Created by suenlue on 17.04.17.
 */


export class SelectModel extends InputBaseModel<string> {

    controlType = InputType.SELECT;
    options: {value: string, label: any}[] = [];

    constructor ( options: IInputBaseModel<string> = <IInputBaseModel<string>>{} ) {
        super ( options );
        this.options = options['options'];
    }
}
