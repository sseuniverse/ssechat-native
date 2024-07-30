/*
 * This is the source code of SSE Universe.
 * It is licensed under GNU GPL v. 3.
 * You should have received a copy of the license in this archive (see LICENSE).
 *
 * Copyright SSE World, 2024-2030.
 */
/**
 * a function to convert bytes to size.
 * @param bytes
 * @returns number
 */
const bytesToSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) {
    return "0";
  }
  const i: number = parseInt(
    String(Math.floor(Math.log(bytes) / Math.log(1024))),
    10
  );
  if (i === 0) {
    return `${bytes} ${sizes[i]})`;
  }
  return `${(bytes / 1024 ** i)?.toFixed(1)} ${sizes[i]}`;
};

export { bytesToSize };
