import "./home.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/posts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
