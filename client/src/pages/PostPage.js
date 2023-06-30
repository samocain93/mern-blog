import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return ''

  return (
    <div>
        <img src={`http://localhost:4000/${postInfo.image}`}></img>
    </div>
  )
}
