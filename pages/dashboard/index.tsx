import * as React from "react";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import { useRouter } from "next/router";
import headlineService from "../../services/headlineService";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function Dashboard() {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const { data } = await headlineService.getAll();
        setHeadlines(data);
      } catch (ex) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Grid container spacing={10} sx={{ padding: "50px" }}>
      {isLoading &&
        Array.from(new Array(10)).map(() => {
          return (
            <>
              <Grid
                item
                md={4}
                xs={12}
                sm={6}
                lg={3}
                sx={{
                  maxWidth: 345,
                  height: 450,
                  maxHeight: 450,
                }}
              >
                <Skeleton variant="rectangular" width={210} height={118} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Grid>
            </>
          );
        })}
      {!isLoading &&
        headlines.map(
          ({ createdAt, provider, logo, imageLink, title, _id }, index) => (
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              lg={3}
              key={index}
              onClick={() => router.push("/headlines/" + _id)}
              sx={{
                cursor: "pointer",
              }}
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
