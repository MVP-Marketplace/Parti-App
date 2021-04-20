const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema([
  {
    name: "Creator",
    permissions: [
      {
        name: "create-card",
      },
      {
        name: "view-card",
      },
      {
        name: "edit-card",
      },
      {
        name: "delete-card",
      },
      {
        name: "publish-card",
      },
    ],
  },
  {
    name: "Contributor",
    permissions: [
      {
        name: "view-card",
      },
      {
        name: "edit-card",
      },
    ],
  },
  {
    name: "Recipient",
    permissions: [
      {
        name: "view-card",
      },
    ],
  },
]);

const Role = mongoose.model("Role", userSchema);
module.exports = Role;
