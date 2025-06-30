import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  const [editMode, setEditMode] = useState(false);

  const { activities, isPending } = useActivities();

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();

    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
  };

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };

  return (
    <Box sx={{ bgcolor: "#eeeeee", pb: 3, minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar handleOpenForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            handleSelectedActivity={handleSelectedActivity}
            handleCancelSelectedActivity={handleCancelSelectedActivity}
            editMode={editMode}
            handleOpenForm={handleOpenForm}
            handleCloseForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
