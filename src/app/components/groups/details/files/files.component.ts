import { Component } from '@angular/core';
import { ComponentSharedUploadFile } from '@components/shared/upload-file/upload-file.component';
import { LucideAngularModule, File, Download } from 'lucide-angular';

@Component({
  selector: 'component-groups-details-files',
  imports: [
    LucideAngularModule,
    ComponentSharedUploadFile
  ],
  templateUrl: './files.component.html',
})
export class ComponentGroupsDetailsFiles {

  readonly File = File;
  readonly Download = Download;
}
