import { Status } from "../types/enum";

export const getTableStatus = (status: Status) => {
  switch (status) {
    case Status.Approved:
      return {
        title: "published",
        variant: "success",
      };

    case Status.Pending:
      return {
        title: "Pending",
        variant: "warning",
      };
    case Status.Rejected:
      return {
        title: "Rejected",
        variant: "danger",
      };

    default:
      return {
        title: "Unknown",
        variant: "danger",
      };
  }
};
