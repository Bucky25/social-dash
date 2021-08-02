import React from 'react'
import './index.css'

function PostCard({repoName, name, time, type}) {
 
  const cardClass =  `card ${name}`;
  // console.log(time);
  return (
      <>
        <article className={cardClass}>
          <p className="card-title">
            <img  alt="" />
            {repoName}
          </p>
          <p className="card-followers">
            <span className="card-followers-number">{name}</span>
            <span className="card-followers-title">Created By</span>
          </p>
          {/* <p className="card-followers">
            <span className="card-issue-type">{type}</span>
            <span className="card-issue-title">Issue type</span>
          </p> */}
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            {time} Created At
          </p>
        </article>

      </>

  )
}

export default PostCard;
