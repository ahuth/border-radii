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
      <div className="mt-8 flex flex-col items-start gap-4">
        <label className="flex flex-col items-start">
          <span className="mb-1">Top Left Semi-Major (horizontal radius)</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.tlMajor}
              onChange={(e) =>
                dispatch({type: 'tlMajor', value: Number(e.target.value)})
              }
            />
            <span className="text-sm font-medium">{state.tlMajor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">Top Left Semi-Minor (vertical radius)</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.tlMinor}
              onChange={(e) =>
                dispatch({type: 'tlMinor', value: Number(e.target.value)})
              }
            />
            <span className="text-sm font-medium">{state.tlMinor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">Top Right Semi-Major (horizontal radius)</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.trMajor}
              onChange={(e) =>
                dispatch({type: 'trMajor', value: Number(e.target.value)})
              }
            />
            <span className="text-sm font-medium">{state.trMajor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">Top Right Semi-Minor (vertical radius)</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.trMinor}
              onChange={(e) =>
                dispatch({type: 'trMinor', value: Number(e.target.value)})
              }
            />
            <span className="text-sm font-medium">{state.trMinor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">
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
            />
            <span className="text-sm font-medium">{state.blMajor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">Bottom Left Semi-Minor (vertical radius)</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="50"
              value={state.blMinor}
              onChange={(e) =>
                dispatch({type: 'blMinor', value: Number(e.target.value)})
              }
            />
            <span className="text-sm font-medium">{state.blMinor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">
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
            />
            <span className="text-sm font-medium">{state.brMajor}px</span>
          </div>
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1">
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
            />
            <span className="text-sm font-medium">{state.brMinor}px</span>
          </div>
        </label>
      </div>
    </div>
  );
}
