import React, { useRef, useEffect } from "react";
import CSSTransition from "react-transition-group";

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

const Transition = () => {
  return <div>This</div>;
};

export default Transition;
