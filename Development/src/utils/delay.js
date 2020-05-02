export default function delay(ms = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
