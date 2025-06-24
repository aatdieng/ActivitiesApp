import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  handleCancelSelectedActivity: () => void;
  handleOpenForm: (id: string) => void;
};

export default function ActivityDetail({
  activity,
  handleCancelSelectedActivity,
  handleOpenForm,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => handleOpenForm(activity.id)}>
          Edit
        </Button>
        <Button color="inherit" onClick={() => handleCancelSelectedActivity()}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
