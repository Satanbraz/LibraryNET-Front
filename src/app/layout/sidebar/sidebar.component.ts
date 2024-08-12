import { Component, Input } from '@angular/core';
import { NzSiderComponent } from 'ng-zorro-antd/layout';
import { AppState } from '../../store/state';
import { Store } from '@ngrx/store';
import { UiState } from '../../store/ui/state';
import { Observable } from 'rxjs';
import { SubMenuItem } from '../../core/models/menu.model';
import { MenuService } from '../../core/services/menu.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NzSiderComponent, SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() isMenuCollapsed: boolean = false;

  public ui!: Observable<UiState>;

  constructor(
    private store: Store<AppState>,
    public menuService: MenuService
  ) {}

  ngOnInit() {
    this.ui = this.store.select('ui');
    this.ui.subscribe((state: UiState) => {
      //this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
      this.isMenuCollapsed = state.menuSidebarCollapsed;
    });
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
