import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const LogoutComp = (props) => {
  useEffect(() => {
  }, []);
  const history = useHistory();
  return (
    <div>
      {localStorage.clear()}
      {history.push("/")}
    </div>
  );
};
export default LogoutComp;
