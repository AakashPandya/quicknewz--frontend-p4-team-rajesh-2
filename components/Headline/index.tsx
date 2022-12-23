import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { StarOutline } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

interface IHeadlineProps {
  link: string;
  provider: string;
  logo: string;
  title: string;
}

const Headline = ({ provider, link, logo, title }: IHeadlineProps) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
      <CardHeader
        avatar={
          <Avatar variant="square" sx={{ width: 100, height: 46 }} src={logo} />
        }
        title={provider}
        subheader="September 14, 2022"
      />
      <CardMedia component="img" height="194" image={link} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarOutline />
        </IconButton>
        <IconButton aria-label="share">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="share">
          <InsertLinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Headline;
