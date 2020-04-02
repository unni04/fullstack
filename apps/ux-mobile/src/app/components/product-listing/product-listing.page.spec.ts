import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductListingPage } from './product-listing.page';

describe('ProductListingPage', () => {
  let component: ProductListingPage;
  let fixture: ComponentFixture<ProductListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
