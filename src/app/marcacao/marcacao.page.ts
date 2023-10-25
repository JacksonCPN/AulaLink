import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-marcacao',
  templateUrl: './marcacao.page.html',
  styleUrls: ['./marcacao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MarcacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
