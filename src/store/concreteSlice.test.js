import concreteSlice , { selectConcrete } from "./concreteSlice";

const initialState = {
  selectedConcreteId: null,
};
describe("tests for concreteSliceInit", () => {
  test("initialize slice with initialValue", () => {
    const concreteSliceInit = concreteSlice(initialState, {
      type: 'unknown',
      });
    expect(concreteSliceInit).toBe(initialState);
  });
  
  test('test selectConcrete', () => {
    let MockConcreteData = {
        "GeneralPurpose": "Building structures",
        "DetailedPurpose": "External vertical elements sheltered from or exposed to rain (XC3/XC4 + XF1) C)",
        "NominalCover": 20,
        "DesignatedConcrete": "RC40/50"
        }
    const afterReducerOperation = concreteSlice(initialState, selectConcrete(MockConcreteData.DesignatedConcrete))
    expect(afterReducerOperation.selectedConcreteId).toBeTruthy()
  })
});