(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("mymodule", [], factory);
    } else if (typeof exports !== 'undefined') {
        // Node or CommonJS
        module.exports = factory();
        if (typeof window === 'undefined') {
            root.mymodule = module.exports;  // also create global module in Node
        }
    } else {
        // Browser globals (root is window)
        root.mymodule = factory();
    }
}(this, function () {

"use strict";

/* Do not edit, autogenerated by pscript */

var _pyfunc_hasattr = function (ob, name) { // nargs: 2
    return (ob !== undefined) && (ob !== null) && (ob[name] !== undefined);
};
var _pyfunc_op_instantiate = function (ob, args) { // nargs: 2
    if ((typeof ob === "undefined") ||
            (typeof window !== "undefined" && window === ob) ||
            (typeof global !== "undefined" && global === ob))
            {throw "Class constructor is called as a function.";}
    for (var name in ob) {
        if (Object[name] === undefined &&
            typeof ob[name] === 'function' && !ob[name].nobind) {
            ob[name] = ob[name].bind(ob);
            ob[name].__name__ = name;
        }
    }
    if (ob.__init__) {
        ob.__init__.apply(ob, args);
    }
};
var _pyfunc_op_mult = function (a, b) { // nargs: 2
    if ((typeof a === 'number') + (typeof b === 'number') === 1) {
        if (a.constructor === String) return _pymeth_repeat.call(a, b);
        if (b.constructor === String) return _pymeth_repeat.call(b, a);
        if (Array.isArray(b)) {var t=a; a=b; b=t;}
        if (Array.isArray(a)) {
            var res = []; for (var i=0; i<b; i++) res = res.concat(a);
            return res;
        }
    } return a * b;
};
var _pymeth_repeat = function(count) { // nargs: 0
    if (this.repeat) return this.repeat(count);
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
};
var Bar, Foo;
// Example on how to create a JavaScript module using PScript.
// 
// PScript creates AMD modules that can be used in the browser, in nodejs,
// and in combination with browserify and related tools.

Foo = function () {
    _pyfunc_op_instantiate(this, arguments);
}
Foo.prototype._base_class = Object;
Foo.prototype.__name__ = "Foo";

Foo.prototype.a_constant = [1, 2, 3];
Foo.prototype.ham = function (x) {
    this.x = x;
    return null;
};

Foo.prototype.eggs = function (y) {
    this.y = _pyfunc_op_mult(this.x, y);
    _pyfunc_hasattr(y, str);
    return null;
};


Bar = function () {
    _pyfunc_op_instantiate(this, arguments);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype._base_class = Foo.prototype;
Bar.prototype.__name__ = "Bar";

Bar.prototype.bla = function (z) {
    console.log(z);
    return null;
};



return {};
})); 
