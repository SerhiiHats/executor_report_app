class UtilTableCalculations {
  sumBothArrays(arrayBefore, arrayPayload) {
    if (arrayBefore.length !== arrayPayload.length) {
      throw new Error("Масиви повинні мати однакову довжину");
    }

    const arrayAfter = arrayBefore.map((value, index) => value + arrayPayload[index]);

    return arrayAfter;
  }

  getPercent(array, indexDividend, indexDivider) {
    if (typeof array[indexDividend] === 'undefined' || typeof array[indexDivider] === 'undefined') {
      throw new Error("Індекси массивів повинні існувати")
    }

    const dividend = array[indexDividend];
    const divider = array[indexDivider];

    if (divider === 0) {
      return 0;
    }

    const result = (dividend / divider) * 100;
    return parseFloat(result.toFixed(2));
  }


}

export const tableCalculations = new UtilTableCalculations();