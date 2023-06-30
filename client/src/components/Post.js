import { formatISO9075, format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({
  title,
  summary,
  content,
  image,
  createdAt,
  author,
  _id
}) {
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/' + image} alt='blog cover' />
        </Link>
      </div>

      <div className='content'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <div className='info'>
          <a className='author'>{author.username}</a>
          <time>{format(new Date(createdAt), 'MMM d yyyy hh:mm')}</time>
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}
