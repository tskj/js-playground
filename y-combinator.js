const lazy = f => x => () => f(x);
const w = x => lazy(x)(x);

const Y = f => (x => f(w(x)))(x => f(w(x)));

const t = x => y => x();
const f = x => y => y();

const eq = Y(rec => x => y =>
  x === y
    ? t
    : x === zero || y === zero
    ? f
    : rec()(sub(x)(S(zero)))(sub(y)(S(zero)))
);

const zero = 'zero';
const S = n => ({ successor: n });

const sub = Y(rec => x => y =>
  eq(y)(zero)(() => x)(() => rec()(x.successor)(y.successor))
);
const add = Y(rec => x => y =>
  eq(y)(zero)(() => x)(() => rec()(S(x))(sub(y)(S(zero))))
);
const mul = Y(rec => x => y =>
  eq(S(zero))(y)(() => x)(() => add(x)(rec()(x)(sub(y)(S(zero)))))
);

const factorial = rec => n =>
  eq(n)(zero)(() => S(zero))(() => mul(n)(rec()(sub(n)(S(zero)))));

const fac = Y(factorial);

const res = fac(S(S(S(S(zero)))));

console.log(JSON.stringify(res));
