export default defineBackground(() => {
  // eslint-disable-next-line no-console -- Just a placeholder.
  console.log("Hello background!", { id: browser.runtime.id });
});
