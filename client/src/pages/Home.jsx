import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
   /*const posts = [
     {
       id: 1,
       title: "Importance of Machine Learning",
       desc: "Machine learning as a concept has been around for quite some time. The term “machine learning” was coined by Arthur Samuel, a computer scientist at IBM and a pioneer in AI and computer gaming. Samuel designed a computer program for playing checkers.",
       img: "https://images.app.goo.gl/iBKzKiMRfFbtFgFYA",
     },
     {
       id: 2,
       title: "Competitive Programming – A Complete Guide",
       desc: "Competitive Programming is a mental sport which enables you to code a given problem under provided constraints. The purpose of this article is to guide every individual possessing a desire to excel in this sport.",
       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 3,
       title: "5 Trends in Computer Science Research",
       desc: " Technology has been growing so exponentially over recent years, there has been a steadily increasing demand for bright graduates to come in and help to transform areas ranging from data infrastructure to cyber security. ",
       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 4,
       title: "The Different Types of Cybersecurity",
       desc: "Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. ",
       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
   ];*/

   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home