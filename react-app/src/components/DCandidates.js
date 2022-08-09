import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import * as actions from "../actions/DCandidate";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ACTION_TYPES } from "../actions/DCandidate";

import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

const DCandidates = (props) => {
  const dispatch = useDispatch();

  // const [currentId, setCurrentId] = useState(0);
  const currentId = useSelector((state) => state.currentId);
  const MatEdit = ({ index }) => {
    const handleEditClick = () => {
      console.log("current id ", currentId);
      dispatch({ type: ACTION_TYPES.UPDATE_CURRENT_ID, payload: index });
    };
    const handleDeleteClick = () => {
      console.log("delete");
      dispatch(actions.Delete(index));
    };

    return (
      <FormControlLabel
        control={
          <>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={handleEditClick}
            >
              <EditIcon style={{ color: blue[500] }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add an alarm"
              onClick={handleDeleteClick}
            >
              <DeleteIcon style={{ color: red[500] }} />
            </IconButton>
          </>
        }
      />
    );
  };

  const userList = useSelector((state) => state.userList);
  useEffect(() => {
    dispatch(actions.fetchAll());
    console.log("you came to use effect");
  }, [dispatch]);

  return (
    <>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          experimentalFeatures={{ newEditingApi: true }}
          columns={[
            { field: "fullName", editable: true },
            { field: "age" },
            { field: "moblie" },
            {
              field: "actions",
              headerName: "Actions",
              sortable: false,
              width: 140,
              disableClickEventBubbling: true,
              renderCell: (params) => {
                return (
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <MatEdit index={params.row.id} />
                  </div>
                );
              },
            },
          ]}
          rows={userList}
        />
      </div>
    </>
  );
};
export default DCandidates;
