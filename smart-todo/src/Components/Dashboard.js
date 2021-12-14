import SideDrawer from "./Layout/SideDrawer";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputBar from "./InputBar";
import MyDay from "./Layout/DrawerPages/MyDay";
import Important from "./Layout/DrawerPages/Important";
import Planned from "./Layout/DrawerPages/Planned";
import Assigned from "./Layout/DrawerPages/Assigned";
import All from "./Layout/DrawerPages/All";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskPaper from "./Layout/TaskPaper";

function Dashboard() {
  // Note: This is a temporary state managment for dashboard. Shift the logic to redux and implement firebase. Also do loose coupling of states.
  const [drawerItemsState, setDrawerItemsState] = useState({
    MyDay: [],
    Important: [],
    Planned: [],
    Assigned: [],
    // All: {...MyDay,...Important,...Planned,...Assigned},
    CDI: "MyDay",
  });
  const displayDrawerItemType = (type) => {
    setDrawerItemsState({ ...drawerItemsState, CDI: type });
  };

  useEffect(() => {
    console.log(drawerItemsState, "==>Dashboard State");
    renderTasksToPaper();
  }, [drawerItemsState]);

  const renderDrawerItem = () => {
    switch (drawerItemsState.CDI) {
      case "MyDay":
        return <MyDay />;
      case "Important":
        return <Important />;
      case "Planned":
        return <Planned />;
      case "Assigned":
        return <Assigned />;
      case "All":
        return <All />;
      default:
        return <MyDay />;
    }
  };

  const setCurrentDrawerItemState = (inputBarState) => {
    console.log(
      inputBarState,
      "==> Input bar state passed to dashboard element."
    );
    const passedTask = inputBarState && [inputBarState];

    switch (drawerItemsState.CDI) {
      case "MyDay":
        passedTask &&
          setDrawerItemsState({
            ...drawerItemsState,
            MyDay: [...drawerItemsState.MyDay, passedTask],
          });
        break;
      case "Important":
        setDrawerItemsState({
          ...drawerItemsState,
          Important: [...drawerItemsState.Important, passedTask],
        });
        break;
      case "Planned":
        setDrawerItemsState({
          ...drawerItemsState,
          Planned: [...drawerItemsState.Planned, passedTask],
        });
        break;
      case "Assigned":
        setDrawerItemsState({
          ...drawerItemsState,
          Assigned: [...drawerItemsState.Assigned, passedTask],
        });
        break;
      // case 'All': setDrawerItemsState({...drawerItemsState.MyDay,...drawerItemsState.Important,...drawerItemsState.Planned,...drawerItemsState.Assigned});
      default:
        console.log("Default case hit.");
    }
  };

  const renderTasksToPaper = () => {
    console.log(
      "Inside RenderTaskPaper.",
      "drawerItemsState.renderTaskFor: ",
      drawerItemsState.renderTaskFor
    );
    switch (drawerItemsState.CDI) {
      case "MyDay":
        return drawerItemsState.MyDay.map((task) => {
          console.log(task.toString());
          return <TaskPaper text={task.toString()} />;
        });
      case "Important":
        return drawerItemsState.Important.map((task) => {
          console.log(task.toString());
          return <TaskPaper text={task.toString()} />;
        });
      case "Planned":
        return drawerItemsState.Planned.map((task) => {
          console.log(task.toString());
          return <TaskPaper text={task.toString()} />;
        });
      case "Assigned":
        return drawerItemsState.Assigned.map((task) => {
          console.log(task.toString());
          return <TaskPaper text={task.toString()} />;
        });
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <SideDrawer
              displayType={displayDrawerItemType}
              selectedItem={drawerItemsState.CDI}
            />
          </Grid>
          <Grid item xs={6} md={10}>
            {renderDrawerItem()}
            {/* <TaskPaper
              text={"One day all these hours will make you a Legend!"}
            /> */}
            <div>{renderTasksToPaper()}</div>
            <div id="inputBarPos"> 

            <InputBar setCDIState={setCurrentDrawerItemState} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
