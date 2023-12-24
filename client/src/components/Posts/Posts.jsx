import Post from "./Post/Post";
import { useSelector } from "react-redux";
import styles from "./posts.module.css";
import { CircularProgress, Grid } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={styles.container}
      container
      alignItems={"stretch"}
      spacing={3}
    >
      {posts &&
        posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Posts;
