import * as React from "react";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import Navbar from "../../components/Navbar/index";
import { Profile } from "../../components/Profile";
import Button from "@mui/material/Button";

export default function Dashboard() {
  const [headlines, setHeadlines] = useState([]);

  const handleButtonClick = () => {
    try {
      fetch(
        "https://us-central1-storied-groove-370117.cloudfunctions.net/app/headlines"
      )
        .then((response) => response.json())
        .then((data) => setHeadlines(data));
    } catch (ex) {
      console.log(ex);
    }
  };

  console.log(headlines);

  return (
    <>
      <Navbar />
      <Profile />
      <Button onClick={handleButtonClick}>Display Headlines</Button>
      <Grid container spacing={3} sx={{ padding: "50px" }}>
        {headlines.map(
          ({ createdAt, provider, logo, imageLink, title }, index) => (
            <Grid item md={4} xs={12} sm={6} lg={3} key={index}>
              <Headline
                provider={provider}
                logo={logo}
                link={imageLink}
                title={title}
                date={createdAt}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  );
}
