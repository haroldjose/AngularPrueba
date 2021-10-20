import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrincipalComponent } from './component/principal/principal.component';
import { MemberComponent } from './component/member/member.component';
import { NewsComponent } from './component/news/news.component';
import { PhotoComponent } from './component/photo/photo.component';
import { VideoComponent } from './component/video/video.component';
import { LoginComponent } from './component/login/login.component';

const routes:Routes=[
    {path:'', component:PrincipalComponent},
    {path:'member', component:MemberComponent},
    {path:'news', component:NewsComponent},
    {path:'photo', component:PhotoComponent},
    {path:'video', component:VideoComponent},
    {path:'login', component:LoginComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}