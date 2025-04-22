"use strict";

import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
export function useAppIsInBackground() {
  const [state, setState] = useState('active');
  useEffect(() => {
    const onStateChange = nextState => {
      setState(nextState);
    };
    const listener = AppState.addEventListener('change', onStateChange);
    return () => {
      listener.remove();
    };
  }, []);
  return state === 'background';
}
//# sourceMappingURL=useAppIsInBackground.js.map