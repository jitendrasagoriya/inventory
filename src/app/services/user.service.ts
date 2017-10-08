import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(){
    return [
      {
        userId: 1001,
        name: 'jitendra',
        email:'jitendrsagoriya@yahoo.co.in',
        address:{
          houseNo:'401',
          PlotNumber:'Plot No. 204',
          street:'RawalPada',
          colony:'AshokVAn',
          colony1:'near Shani mandir',
          city:'mumbai',
          state:'MH',
          country:'India',
          zipCode:400066
        }
      }]
  }

}
