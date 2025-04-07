export function deepEquals<T>(objA: T, objB: T): boolean {
  if (typeof objA !== typeof objB) {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }

    return objA.every((item, index) => deepEquals(item, objB[index]));
  }

  if (typeof objA === "object" && typeof objB === "object") {
    if (objA === null || objB === null) {
      return objA === objB;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every((key) => {
      const keyA = key as keyof typeof objA;
      const keyB = key as keyof typeof objB;

      if (!keysB.includes(key)) {
        return false;
      }

      return deepEquals(objA[keyA], objB[keyB]);
    });
  }

  return objA === objB;
}
