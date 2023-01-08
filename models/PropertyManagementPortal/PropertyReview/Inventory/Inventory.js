const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    hallStairsLanding: {
      doorExternal: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      doorInternal: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      walls: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      floor: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      ceiling: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      skirting: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      window: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      radiator: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      lightFixture: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      sockets: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      switches: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      loftHatch: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      cupboard: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      bannister: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      miscellaneous: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
    },
    kitchen: {
      doorExternal: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      doorInternal: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      walls: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      floor: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      ceiling: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      skirting: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      window: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      radiator: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      lightFixture: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      sockets: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      switches: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      loftHatch: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      cupboard: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      bannister: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
      miscellaneous: {
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
      },
    },
    others: [
      {
        room: {
          type: String,
        },
        item: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", InventorySchema);
