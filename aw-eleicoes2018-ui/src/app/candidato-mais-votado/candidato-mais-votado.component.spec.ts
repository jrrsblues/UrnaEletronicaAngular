import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoMaisVotadoComponent } from './candidato-mais-votado.component';

describe('CandidatoMaisVotadoComponent', () => {
  let component: CandidatoMaisVotadoComponent;
  let fixture: ComponentFixture<CandidatoMaisVotadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoMaisVotadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoMaisVotadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
