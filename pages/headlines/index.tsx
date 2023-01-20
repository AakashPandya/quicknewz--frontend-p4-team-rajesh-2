import * as React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import Navbar from "../../components/Navbar/index";
import Button from "@mui/material/Button";

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
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

  return (
    <>
      <Navbar />
      <Grid container spacing={3} sx={{ padding: "50px" }}>
        {headlines.map(
          ({ createdAt, provider, logo, imageLink, title, id }, index) => (
            <Grid item md={4} xs={12} sm={6} lg={3} key={index}>
              <Link href={`headlines/${id}`}>
                <Headline
                  provider={provider}
                  logo={logo}
                  link={imageLink}
                  title={title}
                  date={createdAt}
                />
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
}