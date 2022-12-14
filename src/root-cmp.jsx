import { Routes, Route } from "react-router"

import routes from "./routes"

import { AppHeader } from "./cmps/app-header"
import { AppFooter } from "./cmps/app-footer"


// export class RootCmp extends React.Component {
export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}
