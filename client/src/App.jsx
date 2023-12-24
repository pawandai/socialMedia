import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import styles from "./app.module.css";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth={"lg"}>
        <AppBar className={styles.appBar} position="static" color="inherit">
          <Typography className={styles.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={styles.image}
            src={memories}
            alt="memories"
            height={60}
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              className={styles.mainContainer}
              justifyContent="space-between"
              alignItems={"stretch"}
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      {/* {posts} */}
    </>
  );
}

export default App;
