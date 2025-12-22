module.exports = {
  "*.{js,jsx}": (filenames) => {
    // Filter out bundle.js and React App_files directory
    const filtered = filenames.filter(
      (f) => !f.includes("bundle.js") && !f.includes("React App_files")
    );
    if (filtered.length === 0) return [];
    return [
      `eslint --fix ${filtered.map((f) => `"${f}"`).join(" ")}`,
      `prettier --write ${filtered.map((f) => `"${f}"`).join(" ")}`,
    ];
  },
  "*.{json,css,md}": "prettier --write",
};
