import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import * as actions from "../actions/DCandidate";
const DCandidates = (props) => {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchAll());
    console.log("you came to use effect");
    console.log("voila the data ", { userList });
  }, [dispatch, userList]);

  return (
    <Fragment>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          columns={[
            { field: "fullName" },
            { field: "age" },
            { field: "moblie" },
          ]}
          rows={userList}
        />
      </div>
    </Fragment>
  );
};
export default DCandidates;
