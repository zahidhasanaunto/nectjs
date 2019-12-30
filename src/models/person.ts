import { IsEmail } from 'class-validator';

export class Person {

    @IsEmail()
    public email?: string;

    constructor(email: string) {
        this.email = email;

        console.log(email);
    }
}