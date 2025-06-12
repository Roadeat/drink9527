import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function OrderPage() {
  // 假菜單，後續可改成 fetch 後端 API 取得
  const [menu, setMenu] = useState({
    storeName: "正北部飲料",
    items: [
      { name: "珍奶", price: 50 },
      { name: "綠茶", price: 30 },
      { name: "紅茶拿鐵", price: 60 },
    ],
  });

  const [selectedDrink, setSelectedDrink] = useState(menu.items[0]);
  const [sweetness, setSweetness] = useState("正常");
  const [ice, setIce] = useState("正常");
  const [note, setNote] = useState("");

  // 總價
  const total = selectedDrink.price;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-4">訂購飲料 - {menu.storeName}</h1>

      {/* 飲料選單 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">飲品：</label>
        <select
          value={selectedDrink.name}
          onChange={(e) =>
            setSelectedDrink(menu.items.find((item) => item.name === e.target.value))
          }
          className="w-full border rounded p-2"
        >
          {menu.items.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>
      </div>

      {/* 甜度選單 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">甜度：</label>
        <select
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
          className="w-full border rounded p-2"
        >
          {["正常", "少糖", "半糖", "微糖", "無糖"].map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>
      </div>

      {/* 冰塊選單 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">冰塊：</label>
        <select
          value={ice}
          onChange={(e) => setIce(e.target.value)}
          className="w-full border rounded p-2"
        >
          {["正常", "少冰", "微冰", "去冰", "熱"].map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>
      </div>

      {/* 備註 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">備註：</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="加珍珠、椰果等"
        />
      </div>

      {/* 總價 */}
      <div className="text-right font-bold text-lg mb-4">總價：${total}</div>

      {/* 送出按鈕 */}
      <button
        onClick={() => {
          alert(
            `你點了：${selectedDrink.name} (${sweetness} / ${ice})，備註：${note}，總價：${total}`
          );
          // TODO: 這裡改成呼叫 API 下訂單
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        送出訂單
      </button>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-blue-200 p-4 flex justify-center gap-6 shadow-md">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate("/")}
        >
          前台訂飲料
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          onClick={() => navigate("/admin")}
        >
          後台管理
        </button>
      </nav>

      <main className="mt-6 p-4">
        <Routes>
          <Route path="/" element={<OrderPage />} />
          <Route path="/admin" element={<div>後台管理內容</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;