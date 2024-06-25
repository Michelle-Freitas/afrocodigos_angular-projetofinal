import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface ResponseAPI {
  id: string;
  body: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule, AppComponent ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ ApiService ]
})

export class FormComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ){ }

  baseURL: string = 'http://localhost:3000/collaborators';
  name: string = '';
  role: string = '';

  submitForm() {
    const newCollaborator = {name: this.name, role: this.role};
    this.name = ''
    this.role = ''
    this.postDataApi(newCollaborator)
  }

  postDataApi(newCollaborator: any) {
    const body = newCollaborator;

    this.apiService.post<ResponseAPI>(this.baseURL, body)
      .subscribe((response: ResponseAPI) => {
        this.router.navigate(['/home'])
      });
  }
 }

