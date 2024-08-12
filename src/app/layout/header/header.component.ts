import { Component, Input } from '@angular/core';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { Observable } from 'rxjs';
import { UiState } from '../../store/ui/state';
import { AppState } from '../../store/state';
import { Store } from '@ngrx/store';
import { ToggleControlSidebar, ToggleSidebarMenu } from '../../store/ui/actions';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzHeaderComponent, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isCollapsed!: boolean;

  public ui!: Observable<UiState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe((state: UiState) => {
      //this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
      this.isCollapsed = state.menuSidebarCollapsed;
    });
  }

  onToggleMenuSidebar() {
    this.store.dispatch(new ToggleSidebarMenu());
  }

  onToggleControlSidebar() {
    this.store.dispatch(new ToggleControlSidebar());
  }
}
