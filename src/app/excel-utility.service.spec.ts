import { TestBed } from '@angular/core/testing';
import { ExcelUtility } from './excel-utility.service';


describe('ExcelUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelUtility = TestBed.get(ExcelUtility);
    expect(service).toBeTruthy();
  });
});
