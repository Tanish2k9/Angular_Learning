import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { authGuard } from './Guards/auth.guard';
import { CourseTaskComponent } from './course-task/course-task.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { courseGuard } from './Guards/course.guard';
import { CreateCourseComponent } from './create-course/create-course.component';
import { childGuard } from './Guards/child.guard';
import { deactiGuard } from './Guards/deacti.guard';
import { matchRouteGuard } from './Guards/match-route.guard';


export const routes: Routes = [

    {path:"",redirectTo:"home",pathMatch:"full"},

    {path:"home",component:HomeComponent},

    {path:"parent",
        component:ParentCompComponent,
        canActivateChild:[childGuard],
        children:[
            {path:"structure",component:StructuralDirectiveComponent}
        ],
    },
    {path:'todo',
        loadComponent:()=>import("./todo/todo.component").then(m=>m.TodoComponent),
        // canActivate:[authGuard]

        // canDeactivate:[deactiGuard]

        // canDeactivate:[deactiGuard]

        canMatch:[matchRouteGuard]
    },
    {path:'todoDetail/:todoId',component:TodoDetailComponent},

    {path:"queryTodo",component:TodoDetailComponent},
    {path:"course",component:CourseTaskComponent},
    {path:"course-details/:courseId",component:CourseDetailsComponent,canActivate:[courseGuard]},
    {path:"create-course",component:CreateCourseComponent},
    
    {path:"**",component:NotFoundComponent},
];
