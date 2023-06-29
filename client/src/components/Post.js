import { formatISO9075, format } from 'date-fns';

export default function Post({ title, summary, content, image, createdAt, author }) {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src={'http://localhost:4000/'+image}
          alt='blog cover'
        />
      </div>

      <div className='content'>
        <h2>{title}</h2>
        <div className='info'>
          <a className='author'>{author.username}</a>
          <time>{format(new Date(createdAt), 'MMM d yyyy hh:mm')}</time>
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}
