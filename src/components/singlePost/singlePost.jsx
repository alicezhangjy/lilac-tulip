import "./singlePost.css";

export default function SinglePost() {
  return(
  <div className="singlePost">
    <div className="singlePostWrapper">
        <img src="https://i.insider.com/60352a14bed5c50011a2c0c9?width=1000&format=jpeg&auto=webp" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-delete-left"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Alice</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta totam consectetur laudantium, quaerat illo a quos itaque et delectus est quisquam modi ex vel, non omnis quo expedita? Architecto!
        </p>
    </div>
  </div>
  )
}
