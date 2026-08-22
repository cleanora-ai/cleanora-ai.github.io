export const features = {
  "offline-processing": {
    title: "Offline File Organization",

    description:
      "Cleanora processes files locally without cloud uploads.",

    sections: [
      {
        title: "Privacy-first architecture",
        content: `
Cleanora processes files directly on your device.

Your files never leave your computer.
        `,
      },

      {
        title: "No cloud dependency",
        content: `
No internet connection is required for organization workflows.
        `,
      },
    ],
  },

  "conflict-safe-moves": {
    title: "Conflict-Safe File Moves",

    description:
      "Preview exact destination paths and refuse unreviewed overwrite changes.",

    sections: [
      {
        title: "Bulk moves need exact destinations",
        content: `
Files can change between preview and execution, or a destination can become occupied.
        `,
      },

      {
        title: "Cleanora validates the reviewed plan",
        content: `
Cleanora preflights the reviewed source and destination paths and aborts if the plan is stale or a conflict appears.
        `,
      },
    ],
  },

  "downloads-cleanup": {
    title: "Automatic Downloads Cleanup",

    description:
      "Build a local, reviewable plan for a messy Downloads folder.",

    sections: [
      {
        title: "Downloads folders grow rapidly",
        content: `
Downloads folders quickly become chaotic and difficult to manage.
        `,
      },

      {
        title: "Cleanora restores structure automatically",
        content: `
Cleanora automatically organizes files into clean structured folders.
        `,
      },
    ],
  },
};
