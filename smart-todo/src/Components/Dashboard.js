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
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";

function Dashboard() {
  // Note: This is a temporary state managment for dashboard. Shift the logic to redux and implement firebase. Also do loose coupling of states.
  const [drawerItemsState, setDrawerItemsState] = useState({
    MyDay: [],
    Important: [],
    Planned: [],
    Assigned: [],
    // All: {...MyDay,...Important,...Planned,...Assigned},
    CDI: "MyDay",
    MyDayCompleted: [],
    ImportantCompleted: [],
    PlannedCompleted: [],
    AssignedCompleted: [],
  });
  const displayDrawerItemType = (type) => {
    // setDrawerItemsState({ ...drawerItemsState, CDI: type });
    setDrawerItemsState((prevState) => {
      return { ...drawerItemsState, CDI: type };
    });
  };

  useEffect(() => {
    renderTasksToPaper();
    console.log("MyDayCompleted: ", drawerItemsState.MyDayCompleted);
    console.log(drawerItemsState);
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
    const passedTask = inputBarState && [inputBarState];

    switch (drawerItemsState.CDI) {
      case "MyDay":
        passedTask &&
          // setDrawerItemsState({
          //   ...drawerItemsState,
          //   MyDay: [...drawerItemsState.MyDay, passedTask],
          // });
          setDrawerItemsState((prevState) => {
            return { ...prevState, MyDay: [...prevState.MyDay, passedTask] };
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
    switch (drawerItemsState.CDI) {
      case "MyDay":
        return drawerItemsState.MyDay.map((task) => {
          return (
            <TaskPaper
              text={task.toString()}
              index={drawerItemsState.MyDay.indexOf(task)}
              type={"MyDay"}
              delete={deleteTask}
              markCompleted={toggleCompleted}
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
              markCompleted={toggleCompleted}
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
              markCompleted={toggleCompleted}
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
              markCompleted={toggleCompleted}
            />
          );
        });
    }
  };

  const deleteTask = (type, index) => {
    console.log("Delete task function called.");
    switch (type) {
      case "MyDay":
        const myDayArr = drawerItemsState.MyDay.filter(
          (task) => task.toString() !== drawerItemsState.MyDay[index].toString()
        );

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

  const toggleCompleted = (type, index, status) => {
    if (status) {
      switch (type) {
        case "MyDay":
          const completedTask = drawerItemsState.MyDay[index];
          // deleteTask(type, index);

          setDrawerItemsState({
            ...drawerItemsState,
            MyDayCompleted: [...drawerItemsState.MyDayCompleted, completedTask],
          });
      }
    }
    if (!status) {
      console.log("Toggle task to false logic.");
      const taskFromMyDayCompleted =
        drawerItemsState.MyDay[index] &&
        drawerItemsState.MyDay[index].toString();
      console.log(
        taskFromMyDayCompleted,
        " ->logic to remove this from MyDayCompleted;[]"
      );
      
      const rindex =
        drawerItemsState.MyDayCompleted &&
        drawerItemsState.MyDayCompleted.findIndex(
          (t) => t.toString() === taskFromMyDayCompleted
        );
        console.log(rindex,' rindex')
        const remainingMyDayCompletedTasks = drawerItemsState.MyDayCompleted &&
        drawerItemsState.MyDayCompleted.splice(rindex,1);
        console.log(drawerItemsState.MyDayCompleted,': remainingMyDayCompletedTasks')
        setDrawerItemsState({...drawerItemsState,MyDayCompleted: [...drawerItemsState.MyDayCompleted]})
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
