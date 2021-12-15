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
          return (
            <TaskPaper
              text={task.toString()}
              index={drawerItemsState.MyDay.indexOf(task)}
              type={"MyDay"}
              delete={deleteTask}
            />
          );
        });
      case "Important":
        return drawerItemsState.Important.map((task) => {
          console.log(task.toString());
          return (
            <TaskPaper
              text={task.toString()}
              index={drawerItemsState.Important.indexOf(task)}
              type={"Important"}
              delete={deleteTask}
            />
          );
        });
      case "Planned":
        return drawerItemsState.Planned.map((task) => {
          console.log(task.toString());
          return (
            <TaskPaper
              text={task.toString()}
              index={drawerItemsState.Planned.indexOf(task)}
              type={"Planned"}
              delete={deleteTask}
            />
          );
        });
      case "Assigned":
        return drawerItemsState.Assigned.map((task) => {
          console.log(task.toString());
          return (
            <TaskPaper
              text={task.toString()}
              index={drawerItemsState.Assigned.indexOf(task)}
              type={"Assigned"}
              delete={deleteTask}
            />
          );
        });
    }
  };

  const deleteTask = (type, index) => {
    console.log("Deleting: ", type, index);
    switch (type) {
      case "MyDay":
        const myDayArr = drawerItemsState.MyDay.filter(
          (task) => task.toString() !== drawerItemsState.MyDay[index].toString()
        );
        console.log(myDayArr, "myDayArr");
        setDrawerItemsState({
          ...drawerItemsState,
          MyDay: [...myDayArr],
        });
        break;
      case "Important":
        const myImportant = drawerItemsState.Important.filter(
          (task) =>
            task.toString() !== drawerItemsState.Important[index].toString()
        );
        setDrawerItemsState({
          ...drawerItemsState,
          Important: [...myImportant],
        });
        break;
      case "Planned":
        const myPlanned = drawerItemsState.Planned.filter(
          (task) =>
            task.toString() !== drawerItemsState.Planned[index].toString()
        );
        setDrawerItemsState({
          ...drawerItemsState,
          Planned: [...myPlanned],
        });
        break;
      case "Assigned":
        const myAssigned = drawerItemsState.Assigned.filter(
          (task) =>
            task.toString() !== drawerItemsState.Assigned[index].toString()
        );
        setDrawerItemsState({
          ...drawerItemsState,
          Assigned: [...myAssigned],
        });
        break;
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
