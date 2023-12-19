import "./home.css";
import Header from "../../header/header";
import Sidebar from "../../sidebar/sidebar";
import Posts from "../../posts/posts";

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
