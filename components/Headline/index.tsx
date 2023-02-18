import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Star, StarOutline } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { logos, timeSince } from "../../helpers";

interface IHeadlineProps {
  isFav: boolean;
  link: string;
  provider: string;
  logo: string;
  title: string;
  date: string;
  id: string;
  handleFavIconClick: any;
}

const Headline = ({
  isFav,
  provider,
  link,
  date,
  logo,
  title,
  id,
  handleFavIconClick,
}: IHeadlineProps) => {
  const shareUrl = `${window.location.origin}/headlines/${id}`;
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345, height: 450, maxHeight: 450 }}>
      <CardHeader
        avatar={
          <Avatar
            variant="square"
            sx={{ width: 100, height: 46 }}
            src={logos[provider]}
          />
        }
        subheader={timeSince(date)}
      />
      <CardMedia component="img" height="194" image={link} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: 0 }} disableSpacing>
        <Button variant="text" onClick={() => router.push("/headlines/" + id)}>
          Details
        </Button>
        <IconButton aria-label="add to favorites" onClick={handleFavIconClick}>
          {isFav ? <Star /> : <StarOutline />}
        </IconButton>
        <IconButton aria-label="facebook">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </IconButton>
        <IconButton aria-label="twitter">
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </IconButton>
        <IconButton aria-label="whatsapp">
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Headline;
