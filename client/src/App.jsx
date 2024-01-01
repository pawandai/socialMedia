import { Container } from "@mui/material";
import { Routes, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/Posts/PostDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Container maxWidth={"xl"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Redirect to={"/posts"} />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/search" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route
          path="/auth"
          element={() => (user ? <Auth /> : <Redirect to={"/posts"} />)}
        />
      </Routes>
    </Container>
  );
}

export default App;
