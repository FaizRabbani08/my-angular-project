import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ReactiveFormsModule],
}).catch((err) => console.error(err));
