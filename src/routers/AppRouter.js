import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import PageNotFound from "../components/PageNotFound";
import HelpExpensePage from "../components/HelpExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpensifyDashBoard from "../components/ExpensifyDashBoard";
import AddExpensePage from "../components/AddExpensePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpensifyDashBoard} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpExpensePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
