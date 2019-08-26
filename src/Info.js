import React from "react";

const Info = props => (
  <div>
    <h3>This is an info doc</h3>
    <h5>This is an info: {props.info}</h5>
  </div>
);

const DashBoard = props => (
  <div>
    <h5>You are successfully authenticated</h5>
    <h3>Welcome to the dashboard: {props.info}</h3>
  </div>
);

const warningFromAdmin = Wrapped => {
  return props => (
    <div>
      {props.isAdmin && <h1>The warning mnessage from admin </h1>}

      <Wrapped {...props} />
    </div>
  );
};

const isAuth = Wrapped => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <Wrapped {...props} />
      ) : (
        <p>Please login to access</p>
      )}
    </div>
  );
};

const AuthUser = isAuth(DashBoard);

//const AdminWarning = warningFromAdmin(Info);
export default AuthUser;
