export const initialState = {
  tlMajor: 25,
  tlMinor: 25,
  trMajor: 0,
  trMinor: 0,
  blMajor: 0,
  blMinor: 0,
  brMajor: 50,
  brMinor: 50,
};

type Action = {
  type: keyof typeof initialState;
  value: number;
};

export function reducer(state: typeof initialState, action: Action) {
  return {
    ...state,
    [action.type]: action.value,
  };
}
