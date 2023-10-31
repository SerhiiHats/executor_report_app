import styles from "./ReportOfMonth.module.scss";
import {useSelector} from "react-redux";
import * as XLSX from "xlsx";
import TheadForTable from "../TheadForTableReport/TheadForTable.jsx";

const ReportOfMonth = () => {
  const reportResult = useSelector(state => state.auth.reportResult);

  // const dataMonth = [5699, 44678417574, 20, 1027221, 2557, 42.84, 16568798, 37.08, 1667, 65.6, 6632225, 40.03, 9747594, 0, 0, 3412, 28109619, 451657];
  const prepareData = (data) => {
    // [5699, 44678417574, 20, 1027221, 2557, 42.84, 16568798, 37.08, 1667, 65.6, 6632225, 40.03, 9747594, 0, 0, 3412, 28109619, 451657];
    return [{
      quantity: data[0],
      sum: data[1],
      stopQuantity: data[2],
      stopSum: data[3],
      closeQuantity: data[4],
      procCloseQuantity: data[5],
      closeSum: data[6],
      procCloseSum: data[7],
      targetQuantity: data[8],
      targetProcCloseQuantity: data[9],
      targetSum: data[10],
      targetProcCloseSum: data[11],
      alimentSum: data[12],
      getQuantity: data[13],
      getSum: data[14],
      haveQuantity: data[15],
      haveSum: data[16],
      execSbirSum: data[17],
    }]
  }
  const handlerExportExcel = () => {
    console.log(reportResult);
    let wb = XLSX.utils.book_new();

    const data = prepareData(reportResult)
    console.log(data);

    let ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MySheet1.xlsx");
  };

  return (
    <div>
      <button onClick={handlerExportExcel}>Export in Excel</button>
      <table className={styles.table}>
        <caption>Оперативна інформація</caption>
        <TheadForTable/>
        {/*<thead>*/}
        {/*<tr>*/}
        {/*  <th colSpan={2}>Підлягало виконанню виконавчих документів *</th>*/}
        {/*  <th colSpan={2}>Виконавчі документи, за якими зупинено вчинення виконавчих дій або зупинено виконавче*/}
        {/*    провадження та по яких ускладнено виконання у зв*язку з дією мораторіїв***/}
        {/*  </th>*/}
        {/*  <th colSpan={4}>Завершено виконавчих проваджень</th>*/}
        {/*  <th colSpan={4}>Фактично виконано***</th>*/}
        {/*  <th>Стягнуто аліментних платежів</th>*/}
        {/*  <th colSpan={2}>Передано</th>*/}
        {/*  <th colSpan={2}>Залишок виконавчих проваджень</th>*/}
        {/*  <th rowSpan={2} className={styles.sum}>Стягнуто виконав-чого збору</th>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.sum}>Підлягала стягненню сума</th>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.sum}>На суму</th>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.percent}>%</th>*/}
        {/*  <th className={styles.sum}>На суму</th>*/}
        {/*  <th className={styles.percent}>%</th>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.percent}>%</th>*/}
        {/*  <th className={styles.sum}>Всього стягнуто</th>*/}
        {/*  <th className={styles.percent}>%</th>*/}
        {/*  <th className={styles.sum}>На суму</th>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.sum}>На суму</th>*/}
        {/*  <th className={styles.quantity}>Кількість</th>*/}
        {/*  <th className={styles.sum}>На суму</th>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <th colSpan={2}>1</th>*/}
        {/*  <th colSpan={2}>2</th>*/}
        {/*  <th colSpan={4}>3</th>*/}
        {/*  <th colSpan={4}>4</th>*/}
        {/*  <th>5</th>*/}
        {/*  <th colSpan={2}>6</th>*/}
        {/*  <th colSpan={2}>7</th>*/}
        {/*  <th>8</th>*/}
        {/*</tr>*/}
        {/*</thead>*/}
        <tbody>
        <tr>
          {reportResult.map((value, index) => (
            <td id={`rm${index}`} key={`rm${index}`}>{value}</td>
          ))}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportOfMonth;