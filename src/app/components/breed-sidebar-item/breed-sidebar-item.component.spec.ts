import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedSidebarItemComponent } from './breed-sidebar-item.component';

describe('BreedSidebarItemComponent', () => {
  let component: BreedSidebarItemComponent;
  let fixture: ComponentFixture<BreedSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedSidebarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
