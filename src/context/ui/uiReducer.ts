import { UIState } from './';

type UIActionType = { type: '[UI] - Switch theme'; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Switch theme':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
