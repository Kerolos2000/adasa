import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/page/home.component').then((m) => m.HomeComponent),
    title: 'عدسة - عالم التصوير',
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/blog/page/blog.component').then((m) => m.BlogComponent),
        title: 'عدسة - المدونة',
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./features/blog-details/page/blog-details.component').then(
            (m) => m.BlogDetailsComponent,
          ),
        title: 'عدسة - تفاصيل المقال',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'عدسة - الصفحة غير موجودة',
  },
];
