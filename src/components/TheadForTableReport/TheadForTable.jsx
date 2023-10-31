import React from 'react';
import styles from "./TheadForTable.module.scss"

const TheadForTable = () => {
  return (
    <thead className={styles.thead}>
    <tr>
      <th colSpan={2}>Підлягало виконанню виконавчих документів *</th>
      <th colSpan={2}>Виконавчі документи, за якими зупинено вчинення виконавчих дій або зупинено виконавче провадження
        та по яких ускладнено виконання у зв*язку з дією мораторіїв**
      </th>
      <th colSpan={4}>Завершено виконавчих проваджень</th>
      <th colSpan={4}>Фактично виконано***</th>
      <th>Стягнуто аліментних платежів</th>
      <th colSpan={2}>Передано</th>
      <th colSpan={2}>Залишок виконавчих проваджень</th>
      <th rowSpan={2} className={styles.sum}>Стягнуто виконав-чого збору</th>
    </tr>
    <tr>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.sum}>Підлягала стягненню сума</th>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.sum}>На суму</th>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.percent}>%</th>
      <th className={styles.sum}>На суму</th>
      <th className={styles.percent}>%</th>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.percent}>%</th>
      <th className={styles.sum}>Всього стягнуто</th>
      <th className={styles.percent}>%</th>
      <th className={styles.sum}>На суму</th>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.sum}>На суму</th>
      <th className={styles.quantity}>Кількість</th>
      <th className={styles.sum}>На суму</th>
    </tr>
    <tr>
      <th colSpan={2}>1</th>
      <th colSpan={2}>2</th>
      <th colSpan={4}>3</th>
      <th colSpan={4}>4</th>
      <th>5</th>
      <th colSpan={2}>6</th>
      <th colSpan={2}>7</th>
      <th>8</th>
    </tr>
    </thead>
  );
};

export default TheadForTable;