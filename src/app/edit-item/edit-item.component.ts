import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

interface ResponseAPI {
  id: string;
  body: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css',
  providers: [ ApiService ]
})

export class EditItemComponent {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){  }

  idToEdit : string = ''
  collaboratorToEdit = {id: '', name: '', role: ''}
  updatedName: string = ''
  updatedRole: string = ''

  baseURL = 'http://localhost:3000/collaborators';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.idToEdit = String(params?.['id'])
    })
    this.getDataToEdit()
  }

  getDataToEdit() {
    this.apiService.get<ResponseAPI>(`${this.baseURL}/${this.idToEdit}`).subscribe((response: any) => {
      this.collaboratorToEdit = response
    })
  }

  saveEdit() {
    const updatedCollaborator = {name: this.updatedName || this.collaboratorToEdit.name, role: this.updatedRole || this.collaboratorToEdit.role}
    this.putDataApi(updatedCollaborator)
    alert('Colaborador alterado com sucesso!')
  }

  putDataApi(updatedCollaborator: any) {
    const body = updatedCollaborator

    this.apiService.put<ResponseAPI>(`${this.baseURL}/${this.idToEdit}`, body)
      .subscribe((response: ResponseAPI) => {
        this.router.navigate(['/home'])
      })
  }
}
