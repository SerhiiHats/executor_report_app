import styles from "./ReportF1ForMonth.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as XLSX from "xlsx";
import {dataReducer} from "../../utils/utilDataReducer.js";
import {setReportF1, setReportMonth} from "../../redux/slices/auth.js";
import TheadForTable from "../TheadForTableReport/TheadForTable.jsx";

const ReportF1ForMonth = () => {
  const reportF1 = useSelector(state => state.auth.reportF1);
  const reportF2 = useSelector(state => state.auth.reportF2);
  console.log(reportF1)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("F1: ", reportF1)
  }, [reportF1]);

  const handlerFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, {type: "binary"});
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      const dataReportF1 = dataReducer.prepareArrayDataOfReportF1(parsedData);
      dispatch(setReportF1(dataReportF1));
      dispatch(setReportMonth([dataReportF1, reportF2]));
    }
  }

  return (
    <div>
      <br/>
      <label htmlFor={"fileInput1"}>Завантажте звіт Форма-F1: </label>
      <input
        key={"fileInput1"}
        id={"fileInput1"}
        type={"file"}
        accept={".xlsx, .xls"}
        onChange={handlerFileUpload}
      />
      <br/>
      <br/>
      <table className={styles.table}>
        <caption>Звіт Ф1 (крім періодичних платежів)</caption>
        <TheadForTable/>
        <tbody>
        <tr>
          {reportF1.map((value, index) => (
            <td id={`rmf1${index}`} key={`rmf1${index}`}>{value}</td>
          ))}
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportF1ForMonth;