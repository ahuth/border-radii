import {useReducer} from 'react';
import {initialState, reducer} from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-8 text-center">
      <h1
        className="mb-6 inline-block border-2 border-blue-500 bg-blue-50 p-4 text-2xl shadow-md transition-all duration-300 ease-in-out"
        style={{
          borderRadius: `${state.tlMajor}px ${state.trMajor}px ${state.brMajor}px ${state.blMajor}px / ${state.tlMinor}px ${state.trMinor}px ${state.brMinor}px ${state.blMinor}px`,
        }}
      >
        Hello World
      </h1>
      <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4">
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Top Left Semi-Major (horizontal radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.tlMajor}
              onChange={(e) =>
                dispatch({type: 'tlMajor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.tlMajor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Top Left Semi-Minor (vertical radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.tlMinor}
              onChange={(e) =>
                dispatch({type: 'tlMinor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.tlMinor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Top Right Semi-Major (horizontal radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.trMajor}
              onChange={(e) =>
                dispatch({type: 'trMajor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.trMajor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Top Right Semi-Minor (vertical radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.trMinor}
              onChange={(e) =>
                dispatch({type: 'trMinor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.trMinor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Bottom Left Semi-Major (horizontal radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.blMajor}
              onChange={(e) =>
                dispatch({type: 'blMajor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.blMajor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Bottom Left Semi-Minor (vertical radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.blMinor}
              onChange={(e) =>
                dispatch({type: 'blMinor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.blMinor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Bottom Right Semi-Major (horizontal radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.brMajor}
              onChange={(e) =>
                dispatch({type: 'brMajor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.brMajor}px
            </span>
          </div>
        </label>
        <label className="flex w-full flex-col">
          <span className="mb-1 text-left">
            Bottom Right Semi-Minor (vertical radius)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.brMinor}
              onChange={(e) =>
                dispatch({type: 'brMinor', value: Number(e.target.value)})
              }
              className="flex-grow"
            />
            <span className="w-12 text-left text-sm font-medium">
              {state.brMinor}px
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
