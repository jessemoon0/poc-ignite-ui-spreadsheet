import { TestBed } from '@angular/core/testing';
import { ExcelUtilityService } from './excel-utility.service';


describe('ExcelUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelUtilityService = TestBed.get(ExcelUtilityService);
    expect(service).toBeTruthy();
  });
});
