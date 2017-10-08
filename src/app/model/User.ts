export class User{
    userId: number;
    name: String;
    email:String;
    address:Address;
}

interface Address{
    houseNo:String;
    PlotNumber:String;
    street:String;
    colony:String;
    colony1:String;
    city:String;
    state:String;
    country:String;
    zipCode:number;

}