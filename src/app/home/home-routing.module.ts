import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
    { path: '', component: HomeComponentComponent, children: [
        {
          path: 'profile',
          loadChildren: () => import('../profile/profile.module')
            .then((m) => m.ProfileModule)
        },
        {
            path: 'about',
            loadChildren: () => import('../about/about.module')
              .then((m) => m.AboutModule)
        },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }