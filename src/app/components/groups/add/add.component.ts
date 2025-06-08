import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from '@interfaces/group.interface';
import { AuthService } from '@services/auth.service';
import { GroupService } from '@services/group.service';
import { Image, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-groups-add',
  imports: [
    ReactiveFormsModule, CommonModule,
    LucideAngularModule
  ],
  templateUrl: './add.component.html',
})
export class ComponentGroupsAdd {

  readonly Image = Image;

  photo: File | null = null;
  photoUrl: string | null = null;


  // Manejar el cambio de archivo para la foto
  onFileChange(event: any): void {
    this.photo = event.target.files[0];
    if (this.photo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoUrl = e.target.result;  // Guardar la URL de la imagen para previsualización
      };
      reader.readAsDataURL(this.photo);
    }
  }


}
