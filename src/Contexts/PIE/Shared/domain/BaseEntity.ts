import { UserId } from "./Users/UserId";

export class BaseEntity {
  constructor(readonly createdOn: Date,
              readonly createdBy: UserId,
              readonly lastModifiedOn: Date | null,
              readonly lastModifiedBy: number | null) {}
}