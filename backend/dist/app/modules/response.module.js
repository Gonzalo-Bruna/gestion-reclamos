"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    res.status(status || 200).send(message);
}
function error(req, res, message, status) {
    res.status(status || 500).send(message || "Unexpected error");
}
;
exports.default = { success, error };
