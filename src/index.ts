export function group<T extends Array<any>, C extends (item: T[number]) => any>(
  input: T,
  callback: C
): Record<ReturnType<C>, Array<T[number]>> {
  const output = {} as Record<any, any[]>
  for (const item of input) {
    const key = callback(item)
    if (key in output) {
      output[key].push(item)
    }
    else {
      output[key] = [item]
    }
  }
  return output
}
