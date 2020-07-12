export class User {
  userId:number;
  name:string;
  email:string;
  password:string;

  constructor(){
    this.userId = 0;
    this.name="";
    this.email="";
    this.password="";
  }
}