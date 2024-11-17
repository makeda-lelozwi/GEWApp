import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Welcome/welcome.component';
import { ProductComponent } from './Products/products.component';
import { PaymentComponent } from './Payment/payment.component';
import { MarketingComponent } from './Dashboard/Marketing/marketing.component';
import { AnalyticsCOmponent } from './Dashboard/Analytics/analytics.component';
import { PreviewComponent } from './Dashboard/Preview/preview.component';
import { FinancialLiteracyComponent } from './Dashboard/literacy/literacy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'dashboard',
    component: PreviewComponent,
  },
  { path: 'analytics', component: AnalyticsCOmponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductComponent },
  { path: 'literacy', component: FinancialLiteracyComponent },
];
