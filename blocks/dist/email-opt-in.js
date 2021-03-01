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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/**
 * An example interactive block component.
 *
 * Feel free to rename this and replace it with your own.
 * The fields from Genesis Custom Blocks are in blockAttributes.
 */
function EmailOptIn(props) {
    var attrs = props.attrs, attributes = props.attributes;
    var blockAttributes = attrs || attributes;
    var _a = __read(React.useState(false), 2), isSubmitted = _a[0], setIsSubmitted = _a[1];
    var _b = __read(React.useState(false), 2), isSuccess = _b[0], setIsSuccess = _b[1];
    return (React.createElement("div", null,
        React.createElement("h3", null, blockAttributes.heading),
        isSubmitted ? (React.createElement("div", null, isSuccess ? (React.createElement("p", null, blockAttributes['submission-message'])) : (React.createElement("div", null, "Sending!")))) : (React.createElement("div", null,
            React.createElement("p", null, blockAttributes['main-copy']),
            React.createElement("input", { placeholder: "First name", type: "text" }),
            React.createElement("input", { placeholder: "Your email", type: "text" }),
            React.createElement("button", { type: "button", onClick: function () {
                    setIsSubmitted(!isSubmitted);
                    setTimeout(function () { return setIsSuccess(!isSuccess); }, 2000);
                } }, blockAttributes['button-text'])))));
}
exports.default = EmailOptIn;
//# sourceMappingURL=email-opt-in.js.map