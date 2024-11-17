import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Welcome/welcome.component';
import { ProductComponent } from './Products/products.component';
import { PaymentComponent } from './Payment/payment.component';
import { LoginComponent } from './Login/login.component';
import { MarketingComponent } from './Dashboard/Marketing/marketing.component';
import { AnalyticsCOmponent } from './Dashboard/Analytics/analytics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'analytics', component: AnalyticsCOmponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductComponent },
];
