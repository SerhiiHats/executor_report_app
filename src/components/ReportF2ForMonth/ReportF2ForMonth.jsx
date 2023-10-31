import styles from "./ReportF2ForMonth.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import * as XLSX from "xlsx";
import {dataReducer} from "../../utils/utilDataReducer.js";
import {setReportF2, setReportMonth} from "../../redux/slices/auth.js";
import TheadForTable from "../TheadForTableReport/TheadForTable.jsx";

const ReportF2ForMonth = () => {
  const reportF2 = useSelector(store => store.auth.reportF2);
  const reportF1 = useSelector(store => store.auth.reportF1);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("F2: ", reportF2)
  }, [reportF2])

  const handlerFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, {type: "binary"});
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      const dataReportF2 = dataReducer.prepareArrayDataOfReportF2(parsedData);
      dispatch(setReportF2(dataReportF2));
      dispatch(setReportMonth([reportF1, dataReportF2]));
    }
  }

  return (
    <div>
      <br/>
      <label htmlFor={"fileInput2"}>Завантажте звіт Форма-F2: </label>
      <input
        key={"fileInput2"}
        id={"fileInput2"}
        type={"file"}
        accept={".xlsx, .xls"}
        onChange={handlerFileUpload}
      />
      <br/>
      <br/>
      <table className={styles.table}>
        <caption>Звіт Ф2 про стягнення періодичних платежів</caption>
        <TheadForTable/>
        <tbody>
        <tr>
          {reportF2.map((value, index) => (
            <td id={`rmf2${index}`} key={`rmf2${index}`}>{value}</td>
          ))}
        </tr>
        </tbody>
      </table>
      <br/>
      ... webstylepress2 ...
      <br/>
      <br/>
    </div>
  );
};

export default ReportF2ForMonth;