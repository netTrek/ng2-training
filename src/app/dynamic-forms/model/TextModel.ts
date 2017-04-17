import { IInputBaseModel, InputBaseModel } from './InputBaseModel';
import { InputType } from './input-type.enum';
/**
 * Created by suenlue on 17.04.17.
 */


export class TextModel extends InputBaseModel<string> {

    controlType = InputType.TEXT;
    type: string;

    constructor ( options: IInputBaseModel<string> = <IInputBaseModel<string>>{} ) {
        super ( options );
        this.type = options['type'];
    }
}
