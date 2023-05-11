import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemFornecedoresComponent } from './mantem-fornecedor.component';

describe('MantemFornecedoresComponent', () => {
  let component: MantemFornecedoresComponent;
  let fixture: ComponentFixture<MantemFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
