import { Component, Prop, h } from "@stencil/core";

export interface ITest {
  foo: "nope" | "bar";
}

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  private _works: ITest = { foo: "nope" };

  @Prop()
  get works(): any {
    return this._works;
  } // get something() must be type ANY or contains both setter types, here "string | ITest" to let the setter function properly
  set works(v: string | ITest) {
    if (typeof v === "string") {
      v = JSON.parse(v);
    }
    this._works = v as ITest;
  }

  private _fails: ITest = { foo: "nope" };
  @Prop()
  get fails(): ITest {
    return this._fails;
  } // here return type is ITest that somehow blocks the setter to be called after hydration
  set fails(v: string | ITest) {
    if (typeof v === "string") {
      v = JSON.parse(v);
    }

    // _fails always type ITest, any string in set will be parsed json
    this._fails = v as ITest;
  }

  render() {
    return (
      <section>
        works: <pre>{JSON.stringify(this.works, null, 2)}</pre>
        fails: <pre>{JSON.stringify(this.fails, null, 2)}</pre>
      </section>
    );
  }
}
