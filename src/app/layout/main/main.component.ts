import { Component } from '@angular/core'
import { HeaderComponent } from '../header/header.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { Observable } from 'rxjs';
import { UiState } from '../../store/ui/state';
import { AppState } from '../../store/state';
import { Store } from '@ngrx/store';
import { ToggleSidebarMenu } from '../../store/ui/actions';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent,
    SharedModule,
    RouterOutlet,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  isCollapsed = false;
  isMobileView: boolean = true;
  isMobileMenuOpen: boolean = false;

  public ui!: Observable<UiState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe((state: UiState) => {
      //this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
      this.isCollapsed = state.menuSidebarCollapsed;
    });
  }

  /* onCollapse(value: any) {} */

  onCollapse(value: any) {
    this.store.dispatch(new ToggleSidebarMenu());
  }

  toggleMobileMenu() {}
}
