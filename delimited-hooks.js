const Component = ({ a, b, c }) => {
  const [state, setState] = useState(0);
  return undefined;
};

const reset = () => {
  const a = 0;
  const someFunc = k => {
    return k(k(2));
  };
  const continuation = next => {
    return next + 1;
  };
  return someFunc(continuation);
};

const reset = async program => {
  const shift = fn => {
    const continuation = program(shift);
    return fn(continuation);
  };
};

const a = reset(async shift => {
  const a = 0;
  const next = await shift(k => k(k(2)));
  return next + 1;
});
