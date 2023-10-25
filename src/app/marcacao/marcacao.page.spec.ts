import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcacaoPage } from './marcacao.page';

describe('MarcacaoPage', () => {
  let component: MarcacaoPage;
  let fixture: ComponentFixture<MarcacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarcacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
