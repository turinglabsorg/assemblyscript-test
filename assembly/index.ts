// The entry file of your WebAssembly module.

export function task(a: i32, b: i32, c: i32): boolean {
  if (a + b === c) {
    return true;
  } else {
    return false;
  }
}
