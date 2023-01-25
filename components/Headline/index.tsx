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
  date: string;
}

const logos: any = {
  NEWS18:
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI5LjkgNDcuNyI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSwgLmNscy02IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMwMDFkNDI7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zLCAuY2xzLTQsIC5jbHMtNSwgLmNscy05IHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZmVmZWZlOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICNlMTI2MWM7CiAgICAgIH0KCiAgICAgIC5jbHMtNiB7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy03IHsKICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xpcC1wYXRoKTsKICAgICAgfQoKICAgICAgLmNscy04IHsKICAgICAgICBmaWxsOiAjNzRjOWM2OwogICAgICB9CgogICAgICAuY2xzLTkgewogICAgICAgIGZpbGw6ICNlZTFjMjU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMC4zKSI+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNywyOS44NGM0LjQtLjA4LDcuMTMtMy4xNCw3LjQ1LTYsLjQ0LTMuOTEtMS42NC01LjI0LTIuODUtNmE0LjYyLDQuNjIsMCwwLDAsMi4xNi00LjY4Yy0uMzktMy41OS0zLjQtNS4zOS02LjkxLTUuNDJzLTYuMjYsMi4xMS02Ljc1LDUuMjhhNC43LDQuNywwLDAsMCwyLjE3LDQuODIsNi4xNyw2LjE3LDAsMCwwLTIuOTEsNS45M0E3LjM4LDcuMzgsMCwwLDAsMTE3LDI5Ljg0WiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGc+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjQuM0gxMjkuNVY0OEguNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMS4xLDExLjlIMTA1LjNWNDYuNkgxLjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNy40LDE4Ljl2MjFoNS4xdi0xM2w3LjUsMTNoNXYtMjFIMTkuOVYzMS4yTDEyLjcsMTguOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yOCwxOC45djIxSDQ0LjRWMzUuM0gzMy4yVjMxLjFINDNWMjYuNkgzMy4yVjIzLjVINDMuOVYxOC44WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMC4zKSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQ1LjMsMTguOWw2LDIxaDUuM2wyLjgtMTMuNSwyLjgsMTMuNWg0LjdsNi0yMUg2Ny41TDY0LjYsMzEuMyw2Mi4xLDE4LjlINTYuNUw1NC4xLDMwLjYsNTEuNCwxOC45WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMC4zKSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTg1LDI1LjhzLjctMi42LTMuNC0zYy0yLjgtLjMtMy40LDEuNy0zLDIuNC45LDEuNSw3LjQsMS41LDEwLjUsNC4xLDIuNywyLjMsMiw3LjQtLjgsOS4zLTMuNCwyLjMtOC43LDEuOS0xMS4xLjhhNi42NCw2LjY0LDAsMCwxLTQtNi44aDVzLS4zLDMuMiwzLjcsMy4yLDQuMi0yLjIsMy4zLTNjLTEtMS04LjgtMS4zLTEwLjktNC41YTYuMzcsNi4zNywwLDAsMSwyLjItOC44YzMuOC0yLjMsOS41LTEuMiwxMS41LDFhNi43Nyw2Ljc3LDAsMCwxLDIuMSw1LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJNOTQuMywxLjJIMTI5VjM1LjlIOTQuNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMDcuMiwyOS42aC01VjEzLjFIOTguOHYtNWg4LjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEwNS4yLDM2LjZWNDdILjZWMTEuNGg5MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMC4zKSIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik05NC4xLDFoMzUuNFYzNi4xSDk0LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTE3LDI5Ljg0YzQuNC0uMDgsNy4xMy0zLjE0LDcuNDUtNiwuNDQtMy45MS0xLjY0LTUuMjQtMi44NS02YTQuNjIsNC42MiwwLDAsMCwyLjE2LTQuNjhjLS4zOS0zLjU5LTMuNC01LjM5LTYuOTEtNS40MnMtNi4yNiwyLjExLTYuNzUsNS4yOGE0LjcsNC43LDAsMCwwLDIuMTcsNC44Miw2LjE3LDYuMTcsMCwwLDAtMi45MSw1LjkzQTcuMzgsNy4zOCwwLDAsMCwxMTcsMjkuODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICAgICAgPGc+CiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0xMjEsMTcuODRhMTQuODgsMTQuODgsMCwwLDEtOCwuMDgsNy42Miw3LjYyLDAsMCwxLC4xMS00LjExYzEuMjUuMTYsMi41MS0uNjgsMy43Ny0uNjdzMi42My44NCw0LC42N0E2LjM2LDYuMzYsMCwwLDEsMTIxLDE3Ljg0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMSAtMC4zKSIvPgogICAgICAgICAgPHBhdGggY2xhc3M9ImNscy04IiBkPSJNMTEzLjA2LDE0LjUyYTcuODIsNy44MiwwLDAsMS0xLjc3LS41Miw5LjY4LDkuNjgsMCwwLDEtMS41Mi0uODJsLjQxLS41OGE4Ljg1LDguODUsMCwwLDAsMS4zOS43NSw2LjgzLDYuODMsMCwwLDAsMS41OC40N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTExMy4xNSwxNy45NGE3LjcxLDcuNzEsMCwwLDEtMS43Ni0uNTEsNy40MSw3LjQxLDAsMCwxLTEuNDMtLjc5bC40Mi0uNTZhNi43Myw2LjczLDAsMCwwLDEuMjkuNyw2LjU5LDYuNTksMCwwLDAsMS41Ny40NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTEyMC44NiwxNC41MmwtLjEtLjdhNi42MSw2LjYxLDAsMCwwLDEuNTctLjQ3LDcuMjQsNy4yNCwwLDAsMCwxLjM5LS43N2wuNDIuNTdhOC43OCw4Ljc4LDAsMCwxLTEuNTMuODVBOC4xOSw4LjE5LDAsMCwxLDEyMC44NiwxNC41MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTEyMC43MSwxNy44OGwwLS43YTQuODYsNC44NiwwLDAsMCwxLjU1LS40LDYuMTgsNi4xOCwwLDAsMCwxLjI5LS43bC40My41NmE3LjIsNy4yLDAsMCwxLTEuNDQuNzlBNS41NSw1LjU1LDAsMCwxLDEyMC43MSwxNy44OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEgLTAuMykiLz4KICAgICAgICAgIDxjaXJjbGUgY3g9IjExOC42NCIgY3k9IjEyLjIyIiByPSIwLjY4Ii8+CiAgICAgICAgICA8Y2lyY2xlIGN4PSIxMTUuMDciIGN5PSIxMi4yMiIgcj0iMC42OCIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xMTkuNDUsMjIuNDVBMi40MSwyLjQxLDAsMCwxLDExNy4wOCwyNWEyLjQ2LDIuNDYsMCwwLDEtMi40Ni0yLjUxQTIuMzIsMi4zMiwwLDAsMSwxMTcuMDYsMjAsMi40LDIuNCwwLDAsMSwxMTkuNDUsMjIuNDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xIC0wLjMpIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
};

const Headline = ({ provider, link, date, logo, title }: IHeadlineProps) => {
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
        title={provider}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={link} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: 0 }} disableSpacing>
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
