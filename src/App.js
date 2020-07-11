import React from "react";
import { Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserCreate from "./components/UserCreate";

function App() {
  return (
    <>
      <Route path="/" component={UserListPage} exact />
      <Route path="/:id" component={UserDetailPage} />
      <Route path="/UserCreate" component={UserCreate} />
    </>
  );
}

export default App;
