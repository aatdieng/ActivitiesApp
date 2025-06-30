import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity | undefined;
  handleSelectedActivity: (id: string) => void;
  handleCancelSelectedActivity: () => void;
  editMode: boolean;
  handleOpenForm: (id: string) => void;
  handleCloseForm: () => void;
};

export default function ActivityDashboard({
  activities,
  selectedActivity,
  handleSelectedActivity,
  handleCancelSelectedActivity,
  editMode,
  handleOpenForm,
  handleCloseForm,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          handleSelectedActivity={handleSelectedActivity}
        />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            handleCancelSelectedActivity={handleCancelSelectedActivity}
            handleOpenForm={handleOpenForm}
          />
        )}
        {editMode && (
          <ActivityForm
            handleCloseForm={handleCloseForm}
            activity={selectedActivity}
          />
        )}
      </Grid2>
    </Grid2>
  );
}
