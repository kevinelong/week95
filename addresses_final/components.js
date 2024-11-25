
class Input {
    constructor(prefix, name, value) {
        this.prefix = prefix;
        this.name = name;
        this.value = value;
    }
    //DRY - Don't Repeat Yourself
    //WET - Write it Every Time (over and over)
    getHTML() {
        const name = this.name;
        const id = `${this.prefix}_${name}`
        //nest input inside a label
        return Tag("label", { for: id, class: name },
            Tag("div", {}, this.name) +
            Tag("input", {
                value: this.value,
                id: id,
                type: "text",
                placeholder: name
            })
        );
    }
}
class Address {
    constructor(title, prefix, street, city, state, zip) {
        this.title = title;
        this.prefix = prefix;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    getHTML() {
        const s = new Input(this.prefix, "street", this.street);
        const c = new Input(this.prefix, "city", this.city);
        const st = new Input(this.prefix, "state", this.state);
        const z = new Input(this.prefix, "zip", this.zip);
        return Tag("div", { "class": "address" },
            Tag("h1", { id: `${this.prefix}_title` }, this.title) +
            s.getHTML() + c.getHTML() + st.getHTML() + z.getHTML()
        );
    }
}