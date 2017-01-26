/**
 * Created by suenlue on 26.01.17.
 */

export class HelperService {

    isString ( val: any ): boolean {

        return typeof val === 'string';

    }

    isNumber ( val: any ): boolean {

        return typeof val === 'number';

    }

    isArray ( val: any ): boolean {

        return Array.isArray( val );

    }

}