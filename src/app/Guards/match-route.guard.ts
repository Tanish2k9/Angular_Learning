import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AdminService } from '../admin.service';

export const matchRouteGuard: CanMatchFn = (route, segments) => {


  let admin = inject(AdminService);


  if(admin.isAdmin){
    return true;
  }else{
    return false;
  }
  // return true;
};
