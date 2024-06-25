import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  notFoundImage: string = 'assets/notFound.jpg';
  imageSource: string = 'https://br.freepik.com/vetores-gratis/pagina-nao-encontrada-com-pessoas-conectando-uma-ilustracao-do-conceito-de-plugue_7967788.htm#fromView=search&page=1&position=19&uuid=9baf78c7-162a-4724-9c75-0f7743096ef2'

}
