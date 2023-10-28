import {useSelector} from "react-redux";
import {isAuthSelector} from "../../redux/slices/auth.js";
import {Typography} from "@mui/material";

const Home = () => {
  const auth = useSelector(isAuthSelector);

  return (
    <div>
      <Typography
        variant={"h3"}>{auth ? "Користувач зареєстрований" : "Зареєстровані користувачі мають більше можливостій"}
      </Typography>
      <h4>This is the main page</h4>
      <p>Цей застосунок допомогає виконавцям виготовляти звіти</p>
      <p>Побудувати звіт дуже легко!</p>
      <p>Наприклад: для того щоб побудувати оперативну інформацію щодо стану виконання, слід спочатку за допомоги АСВП вивантажити звіт Ф1 та Ф2, а після можна їх прочитати і сформувати &quot;Оперативний звіт&quot;</p>
      </div>
  );
};

export default Home;