import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="applications" />}></Route>
          <Route path="applications" element={<Applications />} />
          <Route path="companies" element={<p>Компании</p>} />
          <Route path="drivers" element={<p>Перевозчики</p>} />
          <Route path="settings" element={<p>Настройки</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
