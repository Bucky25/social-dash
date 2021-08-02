import React,{useState} from "react";
import PostCard from "../postsCard";
import "./index.css";

const Post = () => {
    
  let [data ,setData] = useState(null);
  React.useEffect( () => {
      const endpoint = ' https://api.github.com/orgs/anitab-org/events';
      const headers = {
          "Authorization" : process.env.ACCESS_TOKEN
      }
      fetch(endpoint, {
          "method" :"GET",
          "headers" : headers
      })
      .then((resp) => resp.json())
      .then((obj) => {
        setData( obj) ;
      });
  }, [])
  



  return (
      <>
    {data === null ? 
        <h2 style={{textAlign:'center'}}>loading.....</h2>    
    :
        <>
        
            <section className="overview">
            <div className="wrapper">
                <h2>Overview - Events</h2>
                <div className="grid">
                {data.map((detail, key) => (
                    
                    <PostCard
                    repoName={detail.repo.name}
                    key={key}
                    name={detail.actor.display_login}
                    time={detail.created_at}
                    type={detail.type}
                    />
                    ))}
                </div>
            </div>
            </section>
        
        </>
    }
    </>
  );
};
export default Post;
