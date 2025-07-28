import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AdminService } from '../admin.service';

export const authGuard: CanActivateFn = (route, state) => {

  let adminService = inject(AdminService);

  if(adminService.isAdmin){
    return true;
  }else{
    return false;
  }


  // return false;
};
