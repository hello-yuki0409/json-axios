import axios from "axios";
import "./App.css";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // .then の後に、.getで取得した後に実行する関数を設定 引数には取得したデータの情報が入ってくる
      .then((res) => console.log(res.data))
      // .catch でエラー時のハンドリング 引数にはエラー情報が入る
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      // .then の後に、.getで取得した後に実行する関数を設定 引数には取得したデータの情報が入ってくる
      .then((res) => console.log(res.data))
      // .catch でエラー時のハンドリング 引数にはエラー情報が入る
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>idが1のユーザー</button>
    </div>
  );
}
