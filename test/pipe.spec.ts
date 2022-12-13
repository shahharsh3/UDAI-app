import { AadharNumberPipe } from '../app/aadhar-card/aadhar-number.pipe';

describe('AadharNumberPipe', () =>
{
  let pipe : AadharNumberPipe;

  beforeEach(() =>
  {
    pipe = new AadharNumberPipe();
  })

  it('TCP - Creating an instance of AadharNumberPipe', () =>
  {
    expect(pipe).toBeTruthy();
  });

  it('TCP - Testing return value of AadharNumberPipe for input : 123412341234', () =>
  {
    let returnValue = pipe.transform("123412341234");
    expect(returnValue).toBe("1234-1234-1234")
  })

  it('TCP - Testing return value of AadharNumberPipe for input : 128034567654', () =>
  {
    let returnValue = pipe.transform("128034567654");
    expect(returnValue).toBe("1280-3456-7654")
  })
});