import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import LoaderScreen from "../shared/components/molecules/LoaderScreen";
const AuthLayout = lazy(() => import("../shared/layouts/AuthLayout"));
const MainLayout = lazy(() => import("../shared/layouts/MainLayout"));
const MainPage = lazy(() => import("@pages/MainPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));

const Router = () => {
  return (
    <Routes>
      {/* auth layout */}
      <Route
        element={
          <Suspense fallback={<LoaderScreen />}>
            <AuthLayout />
          </Suspense>
        }
      >
        <Route
          path={routes.default}
          element={
            <Suspense fallback={<LoaderScreen />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path={routes.login}
          element={
            <Suspense fallback={<LoaderScreen />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route path={routes.signup} element={<div>signup</div>} />
      </Route>

      {/* main layout */}
      <Route element={<MainLayout />}>
        <Route path={routes.main} element={<div>home</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
