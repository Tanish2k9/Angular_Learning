import { CanDeactivateFn } from '@angular/router';



export interface canComponentDeactivat{

  canDactiv:()=>boolean;

}

export const deactiGuard: CanDeactivateFn<canComponentDeactivat> = (component, currentRoute, currentState, nextState) => {
  return component.canDactiv?component.canDactiv():true;
};
