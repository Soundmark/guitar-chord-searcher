let timer = -1;

export const createInterval = (fn: () => void, time: number) => {
  const loop = () => {
    timer = setTimeout(() => {
      fn();
      loop();
    }, time);
  };
  loop();
};

export const removeInterval = () => {
  clearTimeout(timer);
  timer = -1;
};
