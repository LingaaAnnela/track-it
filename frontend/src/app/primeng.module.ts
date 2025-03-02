import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { EditorModule } from 'primeng/editor';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { Select } from 'primeng/select';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { FluidModule } from 'primeng/fluid';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    FloatLabelModule,
    SplitButtonModule,
    SkeletonModule,
    PanelMenuModule,
    BadgeModule,
    OverlayBadgeModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
    TooltipModule,
    ChipModule,
    EditorModule,
    DrawerModule,
    AvatarModule,
    InputTextModule,
    Dialog,
    SelectModule,
    FloatLabel,
    Select,
    DatePickerModule,
    PasswordModule,
    CarouselModule,
    TagModule,
    DividerModule,
    ConfirmDialogModule,
    ToastModule,
    PanelModule,
    ImageModule,
    FluidModule,
    FileUploadModule,
  ],
  providers: [ConfirmationService, MessageService],
  exports: [
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    FloatLabelModule,
    SplitButtonModule,
    SkeletonModule,
    PanelMenuModule,
    BadgeModule,
    OverlayBadgeModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
    TooltipModule,
    ChipModule,
    EditorModule,
    DrawerModule,
    AvatarModule,
    Dialog,
    SelectModule,
    FloatLabel,
    Select,
    DatePickerModule,
    PasswordModule,
    CarouselModule,
    TagModule,
    DividerModule,
    ConfirmDialogModule,
    ToastModule,
    PanelModule,
    ImageModule,
    FluidModule,
    FileUploadModule,
  ],
})
export class PrimeNgModule {}
