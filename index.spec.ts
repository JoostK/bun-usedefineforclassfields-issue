class Foo {
  baz = this.bar;
  constructor(private readonly bar: string) {}
}

describe('issue', () => {
  it('works', () => {
  	expect(new Foo('test').baz).toEqual('test');
  });
});
