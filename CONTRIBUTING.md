# Contributing

## Set up a browser for testing

By default, WXT will launch Chrome for development.
If you’re running into a warning like this:

> Loading of unpacked extensions is disabled by the administrator

You’ll need to use Firefox instead.
Personally, I recommend Zen.

Here’s an example `web-ext.config.ts` to switch to Zen on macOS:

```ts
import { defineRunnerConfig } from "wxt";

export default defineRunnerConfig({
  binaries: {
    firefox: "/Users/<user>/Applications/Zen Browser.app/Contents/MacOS/zen",
  },
});
```
