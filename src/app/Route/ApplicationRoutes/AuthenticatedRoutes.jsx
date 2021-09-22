import React, { lazy, Suspense } from "react";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import UnAuthenticatedRoutes from "./UnAuthenticatedRoutes";
import { getItem } from "src/core/services/storage/storage";
import { Toaster } from "react-hot-toast";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";

// Employee Panel
const TheLayout = React.lazy(() => import("../../../containers/TheLayout"));

// User Panel
const userPanel = lazy(() =>
  import("../../../views/Panel/UserPanel/UserPanel")
);
const logout = lazy(() =>
  import("../../../views/Authentication/User/Logout/Logout")
);

const AuthenticatedRoutes = () => {
  const employee = JSON.parse(getItem("employee"));

  return (
    <Suspense fallback={<PreRingLoader />}>
      <Toaster />
      <Switch>
        {employee ? (
          <Layout
            path="/admin/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
            footer={false}
          />
        ) : (
          <Layout
            path="/userpanel"
            component={userPanel}
            backGround={true}
            panel={true}
          />
        )}
        <Layout
          path="/logout"
          component={logout}
          footer={false}
          backGround={false}
        />
        <UnAuthenticatedRoutes />
        <Redirect to="/notfound" />
      </Switch>
    </Suspense>
  );
};

export default AuthenticatedRoutes;
