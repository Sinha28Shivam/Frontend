import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardHomeComponent } from './dashboard-home.component';

describe('DashboardHomeComponent', () => {
 beforeEach(async () => {
 await TestBed.configureTestingModule({
 declarations: [ DashboardHomeComponent ],
 imports: [ HttpClientTestingModule ]
 })
.compileComponents();
 });

 it('should create', () => {
 const fixture = TestBed.createComponent(DashboardHomeComponent);
const component = fixture.componentInstance;
expect(component).toBeTruthy();
});
});