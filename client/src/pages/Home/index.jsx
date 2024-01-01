import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Grid, Grow } from "@mui/material";
import styles from "./home.module.css";
import { getPosts } from "../../actions/posts";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
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
  );
};

export default Home;
