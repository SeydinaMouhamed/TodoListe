import {Address} from "./address.models";

export class User{

    constructor(public firstName: string,
        public lastName: string,
        public email: string,
        public address: Address,
        public description: string,
        public dateBirth: string,
        public alises?: string[],
    ) {

    }

}
