export default defineContentScript({
  matches: ["<all_urls>"],
  main() {
    // eslint-disable-next-line no-console -- Just a placeholder.
    console.log("Hello content.");
  },
});
