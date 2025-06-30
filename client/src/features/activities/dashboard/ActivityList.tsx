import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  handleSelectedActivity: (id: string) => void;
};
export default function ActivityList({
  activities,
  handleSelectedActivity,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          handleSelectedActivity={handleSelectedActivity}
        />
      ))}
    </Box>
  );
}
