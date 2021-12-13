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
import TaskPaper from './Layout/TaskPaper'

function Dashboard() {
  const [drawerItemsState, setDrawerItemsState] = useState({
    MyDay:[],
    Important:[],
    Planned:[],
    Assigned:[],
    // All: {...MyDay,...Important,...Planned,...Assigned},
    CDI:'MyDay'
  });
  const displayDrawerItemType = (type) => {
    setDrawerItemsState({...drawerItemsState, CDI:type});
  };

  useEffect(() => {
    console.log(drawerItemsState, "==>Dashboard State");
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

  const setCurrentDrawerItemState = (inputBarState)=>{
    console.log(inputBarState,'==> Input bar state passed to dashboard element.')
    const passedTask = [inputBarState]
    switch(drawerItemsState.CDI){
      case 'MyDay': setDrawerItemsState({...drawerItemsState,MyDay:[...drawerItemsState.MyDay,passedTask]}); 
      case 'Important': setDrawerItemsState({...drawerItemsState,Important:[...drawerItemsState.Important,passedTask]}); 
      case 'Planned': setDrawerItemsState({...drawerItemsState,Planned:[...drawerItemsState.Planned,passedTask]}); 
      case 'Assigned': setDrawerItemsState({...drawerItemsState,Assigned:[...drawerItemsState.Assigned,passedTask]});
      // case 'All': setDrawerItemsState({...drawerItemsState.MyDay,...drawerItemsState.Important,...drawerItemsState.Planned,...drawerItemsState.Assigned});
      default: console.log("Default case hit.")
    }

  }

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
            <TaskPaper text={'One day all these hours will make you a Legend!'}/>
            <InputBar setCDIState = {setCurrentDrawerItemState}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
