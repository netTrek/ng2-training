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
        console.log ( options );
        if ( options.options && options.options['type'] ) {
            this.type = options.options['type'];
        } else {
            this.type = 'text';
        }
        console.log ( this.type );
    }
}
