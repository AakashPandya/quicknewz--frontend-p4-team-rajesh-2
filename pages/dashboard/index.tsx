import * as React from "react";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import { useRouter } from "next/router";
import headlineService from "../../services/headlineService";

export default function Dashboard() {
  const [headlines, setHeadlines] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const { data } = await headlineService.getAll();
      setHeadlines(data);
    })();
  }, []);

  return (
    <Grid container spacing={3} sx={{ padding: "50px" }}>
      {headlines.map(
        ({ createdAt, provider, logo, imageLink, title, _id }, index) => (
          <Grid
            item
            md={4}
            xs={12}
            sm={6}
            lg={3}
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/headlines/" + _id)}
          >
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
  );
}
