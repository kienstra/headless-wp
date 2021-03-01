"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/**
 * An example block component.
 *
 * Feel free to rename this and replace it with your own.
 * The fields from Genesis Custom Blocks are in blockAttributes.
 * For example, if you added a field with the name (slug) of 'example-field',
 * it will be in blockAttributes['example-field].
 */
function Example(props) {
    var attrs = props.attrs, attributes = props.attributes;
    var blockAttributes = attrs || attributes;
    return (React.createElement("div", null,
        React.createElement("p", null, "This is the React component"),
        React.createElement("p", null, blockAttributes['new-field'])));
}
exports.default = Example;
//# sourceMappingURL=example.js.map