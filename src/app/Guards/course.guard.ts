import { CanActivateFn } from '@angular/router';

export const courseGuard: CanActivateFn = (route, state) => {


   let courseId = route.paramMap.get("courseId");

   console.log(courseId ,"---------------------")
   if(courseId === null) return false;
   let id = parseInt(courseId);
   let even:number = id%2;

   if(even === 0){
    alert("you can taccess this")
    return false;
   }else{
    return true;
   }
  
};
