class accountCreation extends verifier{
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
        accounts.set(email,pass);
    }
    get user(){
        return this.email;
    }
    get password(){
        return this.pass;
    }
    set user(newE){
        this.email=newE;
    }
    set password(newP){
        this.pass=newP;
    }
}
