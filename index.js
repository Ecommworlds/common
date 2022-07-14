"use strict";
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const http_errors_1 = tslib_1.__importDefault(require("http-errors"));
express_1.default.response.sendHttpSuccess = function (results, message = "OK", statusCode = 200) {
    return this.contentType('application/json').status(statusCode).send({ message, code: statusCode, error: false, results });
};
express_1.default.response.sendHttpError = function (statusCode, message, error = {}, properties = {}) {
    const errorDetails = { name: error.name, message: error.message, stack: error.stack };
    return this.contentType('application/json').status(statusCode).send({ message, code: statusCode, error: true, errorMessage: (0, http_errors_1.default)(statusCode).message, errorDetails, properties });
};
express_1.default.response.sendValidationError = function (errors, message = "Validation Errors", statusCode = 422) {
    return this.contentType('application/json').status(statusCode).send({ message, code: statusCode, error: true, errorMessage: (0, http_errors_1.default)(statusCode).message, errors });
};
(0, express_1.default)().enable("trust proxy");
(0, express_1.default)().use((0, cors_1.default)());
(0, express_1.default)().use(express_1.default.json());
(0, express_1.default)().use(express_1.default.urlencoded({ extended: false }));
module.exports = (0, express_1.default)();
