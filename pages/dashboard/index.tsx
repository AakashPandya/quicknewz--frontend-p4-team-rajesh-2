import * as React from "react";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Headline from "../../components/Headline/index";
import headlineService from "../../services/headlineService";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";
import _ from "lodash";
import TextField from "@mui/material/TextField";
import { getFavs, setFavs } from "../../helpers";

export default function Dashboard() {
  const [headlines, setHeadlines] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState(getFavs() || []);
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const { data } = await headlineService.getAll();
        setHeadlines(data.headlines);
      } catch (ex) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (inView && headlines.length) {
      (async function () {
        setIsLoading(true);
        try {
          const { data } = await headlineService.getAll(
            `next=${headlines[headlines.length - 1]._id}`
          );
          setHeadlines((stories: any) =>
            _.uniqBy([...stories, ...data.headlines], function (e) {
              return e._id;
            })
          );
        } catch (ex) {
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [inView, headlines]);

  const handleFavIconClick = (id) => {
    console.log(id);
    if (favourites.includes(id)) {
      setFavourites((favs) => {
        const filteredFavs = favs.filter((fav) => fav !== id);
        setFavs(filteredFavs);
        console.log(filteredFavs);
        return filteredFavs;
      });
    } else {
      setFavourites([...favourites, id]);
      setFavs([...favourites, id]);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <Grid container spacing={10} sx={{ padding: "50px" }}>
          {headlines?.map(
            ({ createdAt, provider, logo, imageLink, title, _id }) => (
              <Grid item md={6} xs={12} sm={6} lg={3} key={_id}>
                <Headline
                  provider={provider}
                  logo={logo}
                  link={imageLink}
                  title={title}
                  date={createdAt}
                  id={_id}
                  isFav={favourites.includes(_id)}
                  handleFavIconClick={() => handleFavIconClick(_id)}
                />
              </Grid>
            )
          )}
          {isLoading &&
            Array.from(new Array(10)).map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  md={6}
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
              );
            })}
          <Grid item ref={ref} />
        </Grid>
      </Grid>
    </Grid>
  );
}
