import { r as registerInstance, h } from './index-DWFf8Lm4.js';

const myComponentCss = ".active{display:block}.inactive{display:none}.card{margin-bottom:10px}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    _works = { foo: "nope" };
    get works() {
        return this._works;
    } // get something() must be type ANY or contains both setter types, here "string | ITest" to let the setter function properly
    set works(v) {
        if (typeof v === "string") {
            v = JSON.parse(v);
        }
        this._works = v;
    }
    _fails = { foo: "nope" };
    get fails() {
        return this._fails;
    } // here return type is ITest that somehow blocks the setter to be called after hydration
    set fails(v) {
        if (typeof v === "string") {
            v = JSON.parse(v);
        }
        // _fails always type ITest, any string in set will be parsed json
        this._fails = v;
    }
    render() {
        return (h("section", { key: 'bda1b3a90e064cf801537d0f428c3999a89aa5f2' }, "works: ", h("pre", { key: '1d6d08418c17fa3ace6d0ac7ddcaf91e0d8076a7' }, JSON.stringify(this.works, null, 2)), "fails: ", h("pre", { key: '6bb2dd016ffe92c46729306df505623906fccbb5' }, JSON.stringify(this.fails, null, 2))));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.esm.js.map

//# sourceMappingURL=my-component.entry.js.map