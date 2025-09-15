import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Layout from "./scenes/layout/Layout";
import { themeSettings } from "./theme.js"
import { useSelector } from "react-redux";
import Products from "./scenes/products/Products";
import Customers from "./scenes/customers/Customers";
import Transactions from "./scenes/transactions/Transactions";
import Geography from "./scenes/geography/Geography";
import OverView from "./scenes/overview/OverView";
import Daily from "./scenes/daily/Daily";
import Monthly from "./scenes/monthy/Monthly";
import Breakdown from "./scenes/breakdown/breakdown";
import Admins from "./scenes/admins/Admins";
import Performance from "./scenes/performance/Performance";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to={"/dashboard"} replace/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/transactions" element={<Transactions/>} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<OverView />} />
              <Route path="/daily" element={<Daily/>} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown/>} />
              <Route path="/admin" element={<Admins/> }/>
              <Route path="/performance" element={<Performance/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
