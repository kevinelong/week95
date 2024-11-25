const Attr = (k, v) => `${k}="${v}"`;
function Tag(name, attrs, content = "") {
    if (attrs) { //has attributes
        const keys = Object.keys(attrs);
        const pairs = keys.map(k => Attr(k, attrs[k]));
        attrs = ' ' + pairs.join(' ');
    }
    if (content) { //is closed tag
        content = `${content}</${name}>`; //append closing tag if there is content
    }
    return `<${name}${attrs}>${content}`;
}