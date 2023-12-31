import React,{useState,useEffect} from 'react';
import './Community.css';
import Navbar2 from '../navbar2/Navbar2';
import { Link } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db,auth } from '../../firebase';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const Community = () => {

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
		<div className="community-main-container">
			<Navbar2 />
			<div className="main-content-community">
				<div className="header">
					<p className="header-title">Community</p>
					<Link
						to="/Create_posts"
						style={{ textDecoration: "none", color: "black" }}>
						<button className="create-posts">Create post</button>
					</Link>
				</div>
				<div className="content-text">
					<div className="homePage">
						{postLists.map((post) => {
							return (
								<div className="post">
									<div className="postHeader">
										<div className="title-posts">
											<p className="post-title"> {post.title}</p>
										</div>
										<div className="deletePost">
											{post.author.id === auth.currentUser.uid && (
												<button
													className="delete-btn"
													onClick={() => {
														deletePost(post.id);
													}}>
													<DeleteOutlinedIcon />
												</button>
											)}
										</div>
									</div>
									<div className="postTextContainer"> {post.textcontent} </div>
									<p>@{post.author.email}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Community