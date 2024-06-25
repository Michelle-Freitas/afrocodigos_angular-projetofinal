import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [ ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
  providers: [ ApiService ]
})

export class ItemCardComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ){ }

  baseURL: string = 'http://localhost:3000/collaborators';

  @Input() collaborator = {id: '', name: '', role: ''};

  @Output() editCollaborator = new EventEmitter<any>();

  updateCollaborator() {
    this.editCollaborator.emit()
  }

  deleteDataApi(id: string) {
    this.apiService.delete(`${this.baseURL}/${id}`).subscribe({
      next: () => {
        alert("Colaborador removido com sucesso!");
        this.router.navigate(['/home'])
        window.location.reload()
      },
      error: (error) => {
        alert("Não foi possível deletar colaborador");
        console.log(error)
      }
    })
  }

}
