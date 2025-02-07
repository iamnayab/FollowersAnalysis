import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersAnalysisComponent } from './followers-analysis.component';

describe('FollowersAnalysisComponent', () => {
  let component: FollowersAnalysisComponent;
  let fixture: ComponentFixture<FollowersAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
