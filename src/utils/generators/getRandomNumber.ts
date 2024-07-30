/*
 * This is the source code of SSE Universe.
 * It is licensed under GNU GPL v. 3.
 * You should have received a copy of the license in this archive (see LICENSE).
 *
 * Copyright SSE World, 2024-2030.
 */
/**
 * Generates a random integer between the specified minimum and maximum values.
 *
 * @param max
 * @param {number} min - The minimum value of the*/
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt };
