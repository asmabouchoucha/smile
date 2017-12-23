export class Mail {

    constructor(
        public id: number,
        public from: string,
        public to : string, 
        public object: string, 
        public core: string, 
        public sent: number,
        public opened: number, 

    ) {}
}