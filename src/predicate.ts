export interface Predicate<A = any> {
  (value: A): boolean;
}

export interface Refinement<A = any, B extends A = A> {
  (value: A): value is B;
}

export type ParamOf<P1 extends Predicate, P2 extends Predicate> = P1 extends Predicate<infer A1>
  ? P2 extends Predicate<infer A2>
    ? A1 & A2
    : never
  : never;
