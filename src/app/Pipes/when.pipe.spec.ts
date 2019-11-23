import { WhenPipe } from './when.pipe';

describe('WhenPipe', () => {
  const pipe = new WhenPipe();
  beforeEach( () => {
    const DteTime = new Date(2019, 11, 21, 14, 10, 10) ;
    jasmine.clock().install();
    jasmine.clock().mockDate(DteTime);
  });
  afterEach( () => {
    jasmine.clock().uninstall();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return Future date entered', () => {
    expect(pipe.transform('2019-12-22T03:14:36.888', '')).toBe('Future date entered.');
  });
  it('should return Today', () => {
    expect(pipe.transform('2019-12-21T03:14:36.888', '')).toBe('Today!');
  });
  it('should return yesterday', () => {
    expect(pipe.transform('2019-12-20T03:14:36.888', '')).toBe('Yesterday!');
  });
  it('should return days ago', () => {
    expect(pipe.transform('2019-12-18T03:14:36.888', '')).toBe('3 days ago!');
  });
  it('should return hours ago', () => {
    expect(pipe.transform('2019-12-21T09:14:36.888', '')).toBe('4 hours ago!');
  });
  it('should return minutes ago', () => {
    expect(pipe.transform('2019-12-21T14:05:36.888', '')).toBe('5 minutes ago!');
  });
  it('should return Just Now', () => {
    expect(pipe.transform('2019-12-21T14:10:06.888', '')).toBe('Just Now');
  });
});
