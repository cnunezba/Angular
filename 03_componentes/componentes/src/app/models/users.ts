export interface User  {
    id: string | number;
    email: string;
    recuerdame: boolean;
    password: string;
    sexo: string;
}

export class UserModel implements User {
    id: string | number;
    email: string;
    recuerdame: boolean;
    password: string;
    sexo: string;

    constructor () {}

}

