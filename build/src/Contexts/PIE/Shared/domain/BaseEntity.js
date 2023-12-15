"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    constructor(createdOn, createdBy, lastModifiedOn, lastModifiedBy) {
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.lastModifiedOn = lastModifiedOn;
        this.lastModifiedBy = lastModifiedBy;
    }
}
exports.BaseEntity = BaseEntity;
