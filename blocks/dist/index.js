"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var example_1 = __importDefault(require("./example"));
var email_opt_in_1 = __importDefault(require("./email-opt-in"));
var namespace = 'genesis-custom-blocks';
// The GCB block slugs follow the namespace, like 'example' and 'email-opt-in'.
var blockComponents = (_a = {},
    _a[namespace + "/example"] = example_1.default,
    _a[namespace + "/email-opt-in"] = email_opt_in_1.default,
    _a);
exports.default = blockComponents;
//# sourceMappingURL=index.js.map