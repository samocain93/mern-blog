import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../UserContext';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return '';

  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className='author'>Written by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className='edit-row'>
          <a href="" className='edit-btn'>Edit this post</a>
        </div>
      )}

      <div className='image'>
        <img src={`http://localhost:4000/${postInfo.image}`} alt=''></img>
      </div>
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      ></div>
    </div>
  );
}
