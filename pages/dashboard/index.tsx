import * as React from "react";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import Navbar from "../../components/Navbar/index";

export default function Dashboard() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    console.log("I AM HERE");
    try {
      fetch(
        "https://us-central1-storied-groove-370117.cloudfunctions.net/app/headlines"
      )
        .then((response) => response.json())
        .then((data) => setHeadlines(data));
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  console.log(headlines);

  return (
    <>
      <Navbar />
      {headlines}
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
