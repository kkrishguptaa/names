import { hash } from 'node:crypto'

export function rand<T>(arr: T[], seed: [string, number]): T {
  const [str, index] = seed;

  const h = hash('sha256', str + index)

  return arr[Math.abs(parseInt(h.slice(0, 8), 16)) % arr.length];
}

export function rando<T>(arr: T[], seed: [string, number]): T {
  return rand(arr, [seed[0].repeat(Math.random() * 100), seed[1] * Math.floor(Math.random() * Number.MAX_VALUE)]);
}

export function randosort() {
  return rand([1, -1], [Math.random().toString(), Math.random()]);
}
