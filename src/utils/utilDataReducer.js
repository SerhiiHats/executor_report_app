import {tableCalculations} from "./utilTableCalculations.js";

class UtilDataReducer {

  prepareArrayDataOfReportF2(data) {
    const finalDataF2 = this.#createEmptyArray(18);

    const tempData = Object.values(data[5]).map(value => value);

    finalDataF2[0] = tempData[7];
    finalDataF2[4] = tempData[8];
    finalDataF2[8] = tempData[9];
    finalDataF2[15] = finalDataF2[0] - tempData[8];

    return finalDataF2;
  }

  prepareArrayDataOfReportF1(data) {
    const finalDataF1 = this.#createEmptyArray(18);

    const tempData1 = Object.values(data[6]).map(value => value);
    const tempData2 = Object.values(data[10]).map(value => value);

    console.log("tempData1: ", tempData1)
    console.log("tempData2: ", tempData2)

    finalDataF1[0] = tempData1[9];
    finalDataF1[2] = tempData1[6] + tempData1[8];
    finalDataF1[4] = tempData1[10];
    finalDataF1[8] = tempData1[11];
    finalDataF1[15] = finalDataF1[0] - finalDataF1[4];

    finalDataF1[1] = tempData2[9];
    finalDataF1[3] = tempData2[6] + tempData2[8];
    finalDataF1[6] = tempData2[10];
    finalDataF1[10] = tempData2[14];
    finalDataF1[16] = finalDataF1[1] - finalDataF1[6];

    console.log("finalDataF1: ", finalDataF1);
    return finalDataF1;
  }

  #createEmptyArray(capacity) {
    return new Array(capacity).fill(0);
  }

  prepareFinalArray(arrayPayload, arrayBefore) {
    const arrayAfter = tableCalculations.sumBothArrays(arrayPayload, arrayBefore)

    arrayAfter[5] = tableCalculations.getPercent(arrayAfter, 4, 0);
    arrayAfter[7] = tableCalculations.getPercent(arrayAfter, 6, 1);
    arrayAfter[9] = tableCalculations.getPercent(arrayAfter, 8, 4);
    arrayAfter[11] = tableCalculations.getPercent(arrayAfter, 10, 6);

    console.log("arrayAfter", arrayAfter);

    return arrayAfter;
  }

}

export const dataReducer = new UtilDataReducer();