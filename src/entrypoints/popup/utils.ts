export async function delay(
  timeout: number,
  aborter: AbortController,
): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(resolve, timeout);
    aborter.signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);

      reject(new Error("Unmounted"));
    });
  });
}
