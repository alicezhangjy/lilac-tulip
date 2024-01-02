import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://i.etsystatic.com/36437952/r/il/0f1373/4004779388/il_fullxfull.4004779388_35sx.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">amigurumi</span>
        </div>
        <span className="postTitle">Lorem Ipsum</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam id
        ipsam fugiat sint atque distinctio cum accusamus a molestiae? Quos
        officia eligendi in accusantium repellendus esse soluta reiciendis
        facere maiores!
      </p>
    </div>
  );
}
