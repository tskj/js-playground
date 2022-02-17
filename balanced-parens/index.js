const just = target => input => input.startsWith(target) && target;

const concat = (...patterns) => input => {
  if (patterns.length === 0) {
    return false;
  }

  const match = patterns[0](input);
  if (match === false) {
    return false;
  }

  if (patterns.length === 1) {
    return match;
  }

  const rest = concat(...patterns.slice(1))(input.substring(match.length));
  if (rest === false) {
    return false;
  }

  return match + rest;
};

const _case = (...cases) => input => {
  const matches = cases.map(p => p(input)).filter(m => m !== false);
  matches.sort((a, b) => b.length - a.length);

  if (matches.length === 0) {
    return false;
  }

  return matches[0];
};

const balanced = input =>
  _case(
    just(""),
    concat(just("("), balanced, just(")")),
    concat(balanced, balanced)
  )(input);

const test = "(())";
console.log(balanced(test));
