const comp = f => g => x =>
                f (g (x))

const iff = t => x => y =>
                (t (x) (y))()
const tru = a => b =>
                a
const fal = a => b =>
                b
const and = x => y => f => s =>
                x
                    (y (f) (s))
                    (s)
const or = x => y => f => s =>
                x
                    (f)
                    (y (f) (s))
const not = t => f => s =>
                t (s) (f)


const pair = x => y => f =>
                f (x) (y)
const fst = p => p (tru)
const snd = p => p (fal)


const zero = f => x => x
const isZero = n =>
                 n (() => fal) (tru)
const add = m => n => f =>
                comp (m (f)) (n (f))
const mul = m => n => f => x =>
                m (n (f)) (x)
const succ = n => f => x =>
                f (n (f) (x))
const pred = n =>
                snd
                    (n
                        (p =>
                            fst (p)
                                (pair (fal) (snd (p)))
                                (pair (fst (p)) (succ (snd (p)))))
                        (pair (tru) (zero)))
const sub = m => n =>
                iff (isZero (n))
                    (() => m)
                    (() => sub (pred (m)) (pred (n)))
const isEq = m => n =>
                isZero (sub (m) (n))


const tojs = n => n (n => n + 1) (0)

const three = succ (succ (succ (zero)))
const four = succ (three)

const seven = add (three) (four)
const twelve = mul (three) (four)

const five = sub (twelve) (seven)

console.log(tojs(three))
console.log(tojs(four))
console.log(tojs(seven))
console.log(tojs(twelve))
console.log(tojs(five))
console.log(tojs(mul(five)(mul(five)(five))))

const three = f => x => f(f(f(x)))

