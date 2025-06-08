import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, UserRoundCog, ChevronDown, UserSearch, Trash, X } from 'lucide-angular';

@Component({
  selector: 'component-shared-add-members',
  imports: [
    LucideAngularModule,
    FormsModule, CommonModule
  ],
  templateUrl: './add-members.component.html',
})
export class ComponentSharedAddMembers {

  searchTerm: string = '';
  filteredUsers: any[] = [];
  selectedUsers: any[] = [];
  removingUserIds: number[] = [];

  readonly Search = Search;
  readonly UserRoundCog = UserRoundCog;
  readonly UserSearch = UserSearch;
  readonly ChevronDown = ChevronDown;
  readonly X = X;

  users = [
    {
      id: 1,
      name: 'Luis Alfonso Paredes Campos',
      code: 'U23102571',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 2,
      name: 'Ana Lucía Sánchez Perez',
      code: 'U27439632',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 3,
      name: 'Carlos Eduardo Mendoza Ríos',
      code: 'U20156489',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 4,
      name: 'María Fernanda Torres López',
      code: 'U19845632',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 5,
      name: 'Juan Diego Castro Vargas',
      code: 'U21789456',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 6,
      name: 'Valentina Paz Morales Silva',
      code: 'U22365478',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 7,
      name: 'Sebastian Andrés Rojas Díaz',
      code: 'U20987456',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 8,
      name: 'Camila Andrea Flores Ruiz',
      code: 'U21654789',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 9,
      name: 'Gabriel Alejandro Pinto Cruz',
      code: 'U22147896',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    },
    {
      id: 10,
      name: 'Isabella Sofia Herrera Muñoz',
      code: 'U23698741',
      image: 'https://class.utp.edu.pe/static/media/student.42525dea.svg',
    }
  ];


  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) &&
      !this.selectedUsers.some(selected => selected.id === user.id)
    );
  }

  selectUser(user: any) {
    this.selectedUsers.push(user);
    this.searchTerm = '';
    this.filteredUsers = [];
  }

  // removeUser(userId: number) {
  //   this.selectedUsers = this.selectedUsers.filter(user => user.id !== userId);
  // }

  removeUser(userId: number) {
    this.removingUserIds.push(userId);

    setTimeout(() => {
      this.selectedUsers = this.selectedUsers.filter(user => user.id !== userId);
      this.removingUserIds = this.removingUserIds.filter(id => id !== userId);
    }, 200); // tiempo igual a la duración de tu animación
  }


  assignUsers() {
    if (this.selectedUsers.length === 0) return;

    // Podés agregar lógica de envío real si querés luego
    console.log('Usuarios asignados:', this.selectedUsers);

    // Simular asignación: limpiar lista
    this.selectedUsers = [];
    this.searchTerm = '';
    this.filteredUsers = [];
  }

}
