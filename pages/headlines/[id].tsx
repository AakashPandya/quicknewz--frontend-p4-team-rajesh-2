import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import headlineService from "../../services/headlineService";
import Grid from "@mui/material/Grid";
import { logos, timeSince } from "../../helpers";

const Head = ({ data }: any) => {
  const { provider, logo, imageLink, title, createdAt } = data;

  return (
    <Grid container justifyContent="center" sx={{ maxWidth: "90%" }}>
      <Card sx={{ minWidth: "50%", minHeight: 400, marginTop: "10px" }}>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              sx={{ width: 100, height: 46 }}
              src={logos[provider]}
            />
          }
          subheader={timeSince(createdAt)}
        />
        <CardMedia component="img" image={imageLink} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Head;

export async function getServerSideProps(context: any) {
  const { data } = await headlineService.getDetails(context.params.id);

  return { props: { data } };
}
