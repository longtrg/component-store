import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedSidebarComponent } from './breed-sidebar.component';

describe('BreedSidebarComponent', () => {
  let component: BreedSidebarComponent;
  let fixture: ComponentFixture<BreedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
