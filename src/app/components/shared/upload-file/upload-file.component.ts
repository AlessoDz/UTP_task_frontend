import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { File, LucideAngularModule, Trash, Upload } from 'lucide-angular';

@Component({
  selector: 'component-shared-upload-file',
  imports: [
    CommonModule,
    LucideAngularModule,
],
  templateUrl: './upload-file.component.html',
})
export class ComponentSharedUploadFile {

  readonly Upload = Upload;
  readonly File = File;
  readonly Trash = Trash;

  files: any[] = [];
  nextId = 0;
  isDragOver = false;

  onFileSelected(event: Event | FileList) {
    let fileList: FileList | null = null;

    if (event instanceof Event) {
      const input = event.target as HTMLInputElement;
      fileList = input.files;
    } else {
      fileList = event;
    }

    if (!fileList) return;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const newFile: any = {
        file,
        progress: 0,
        id: this.nextId++,
      };
      this.files.push(newFile);
      this.simulateUpload(newFile);
    }
  }

  simulateUpload(fileUpload: any) {
    const interval = setInterval(() => {
      if (fileUpload.progress >= 100) {
        clearInterval(interval);
      } else {
        fileUpload.progress += 1;
      }
    }, 10);
  }

  removeFile(id: number) {
    this.files = this.files.filter(f => f.id !== id);
  }

  formatSize(size: number): string {
    if (size < 1024) return size + ' B';
    else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
    else return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }

  // Eventos drag & drop
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files) {
      this.onFileSelected(event.dataTransfer.files);
    }
  }

}
