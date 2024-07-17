import '@hirez_io/jasmine-given';

import { TestBed } from '@angular/core/testing';
import { FrontComponent } from './front.component';
describe('FrontComponent', () => {
  let componentUnderTest: FrontComponent;
  let actualValue: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [FrontComponent]
    });

    componentUnderTest = TestBed.inject(FrontComponent);
  });

  describe('INIT', () => {
    Then(() => {
      expect(componentUnderTest.llamas.length).toBeGreaterThan(0);
    });
  });

  describe('METHOD: isListVisible', () => {
    When(() => {
      actualValue = componentUnderTest.isListVisible();
    });

    describe('GIVEN there are llamas THEN return true', () => {
      Given(() => {
        componentUnderTest.llamas = [{ name: 'Billy', imageFile: '1.jpg' }];
      });
      Then(() => {
        expect(actualValue).toEqual(true);
      });
    });

    describe('GIVEN there areno llamas THEN return false', () => {
      Given(() => {
        componentUnderTest.llamas = [];
      });
      Then(() => {
        expect(actualValue).toEqual(false);
      });
    });
  });
});
