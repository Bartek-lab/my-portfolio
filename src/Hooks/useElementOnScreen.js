import { useState, useMemo, useEffect } from "react";

const useElementOnScreen = (options, targetRef) => {
  const [isIntersecting, setIsIntersectin] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setIsIntersectin(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      // if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isIntersecting;
};

export default useElementOnScreen;
