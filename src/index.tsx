import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router-dom"
import { App } from "./App"
import { Home } from "./components/Home"
import { NotFound } from "./components/NotFound"
import { OrderSummary } from "./components/OrderSummary"
import { PaymentPortal } from "./components/PaymentPortal"
import reportWebVitals from "./services/reportWebVitals"
import * as serviceWorker from "./services/serviceWorker"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":orderId" element={<OrderSummary />} />
          <Route path="payment" element={<PaymentPortal />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

