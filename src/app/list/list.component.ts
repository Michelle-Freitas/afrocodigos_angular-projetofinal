import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Router } from '@angular/router';

interface ResponseAPI {
  id: string;
  body: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule, ItemCardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [ ApiService ]
})

export class ListComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ){}

  baseURL = 'http://localhost:3000/collaborators';
  collaborators: any = [{}]

  editCollaborator: any = {}

  ngOnInit() {
    this.getDataApi();
  }

  getDataApi() {
    this.apiService.get<ResponseAPI>(`${this.baseURL}`).subscribe((response: any) => {
      this.collaborators = response
    })
  }

  onEditCollaborator(collaborator: any) {
    this.editCollaborator = collaborator
    this.router.navigate([`/edit/${collaborator.id}`])
  }

}
