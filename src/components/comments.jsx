import React from 'react'
import styled from 'styled-components'
import media from './media'

const CommentBox = styled.div`
  .owner {
    margin: 20px 0;
    display: flex;
    img {
      width: 60px;
      border-radius: 50%;
    }
    div {
      flex: auto;
      p {
        margin: 0;
      }
    }
  }
  .title-data {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
  }
  .content {
    img {
      max-width: 800px;
      ${media.md`max-width: 700px;`}
      ${media.sm`max-width: 400px;`}

      ${media.xs`max-width: 300px;`}
      display: block;
      margin: 0 auto;
    }
  }
  .tags {
    display: flex;
    max-width: 800px;
    ${media.md`max-width: 700px;`}
    ${media.sm`max-width: 400px;`}
    ${media.xs`max-width: 300px;`}
    flex-wrap: wrap;
    .tag-items {
      margin: 10px;
      display: inline-block;
      border-radius: 24px;
      padding: 15px;
      box-shadow: 0px 0px 15px 0px rgba(32, 33, 36, 0.28);
      &:hover {
        cursor: pointer;
      }
    }
  }
`
const parse = createdAt => {
  let date = new Date(createdAt)
  date = date.toString()
  let myRe = date.match('GMT.+')
  let newDate = date.slice(0, myRe.index)
  return newDate
}
const Comments = ({ post }) => {
  return (
    <CommentBox key={post.id}>
      <div className="owner">
        <img src={post.owner.image} alt="" />
        <div>
          <div className="title-data">
            <p>
              {`${post.owner.nameTitle} 
              ${post.owner.firstName} 
              ${post.owner.lastName}`}
            </p>
            <p>{parse(post.createdAt)}</p>
          </div>
          <hr />
        </div>
      </div>
      <div className="content">
        <p>{post.message}</p>
        <img src={post.image} alt="" />
      </div>
      <div className="tags">
        {post.tags.map((tag, key) => (
          <div className="tag-items" key={key}>
            {tag.title}
          </div>
        ))}
      </div>
    </CommentBox>
  )
}

export default Comments
