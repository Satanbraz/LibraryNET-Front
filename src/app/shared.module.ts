import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgZorroAntdModule } from "ng-zorro-antd";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {
  NzDropDownModule,
  NzContextMenuServiceModule,
} from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
// import { NzCodeEditorModule } from "ng-zorro-antd/code-editor";
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

import { RouterModule } from '@angular/router';
// import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

registerLocaleData(localeEs);

const MODULES = [
  CommonModule,
  RouterModule,
  // NgZorroAntdModule,
  NzFormModule,
  FormsModule,
  NzButtonModule,
  NzCardModule,
  NzCarouselModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzCollapseModule,
  NzDatePickerModule,
  NzDividerModule,
  NzDrawerModule,
  NzDropDownModule,
  NzGridModule,
  NzInputModule,
  NzInputNumberModule,
  NzListModule,
  NzMenuModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPageHeaderModule,
  NzPaginationModule,
  NzRadioModule,
  NzSelectModule,
  NzSliderModule,
  NzSpinModule,
  NzStepsModule,
  NzTableModule,
  NzTabsModule,
  NzToolTipModule,
  NzAlertModule,
  NzAutocompleteModule,
  NzBackTopModule,
  NzBreadCrumbModule,
  NzIconModule,
  NzLayoutModule,
  NzProgressModule,
  NzResizableModule,
  NzTransferModule,
  NzTypographyModule,
  NzUploadModule,
  NzAvatarModule,
  NzBadgeModule,
  NzDescriptionsModule,
  NzEmptyModule,
  NzSkeletonModule,
  NzResultModule,
  NzPopoverModule,
  NzSpaceModule,
  NzAnchorModule,
  NzTagModule,
  NzContextMenuServiceModule,
  NzTreeModule,
  NzSwitchModule,
  NzTreeSelectModule,
  NzTimePickerModule,
  ReactiveFormsModule,
  NzPopconfirmModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
})
export class SharedModule {}
