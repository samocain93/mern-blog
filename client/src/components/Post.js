import { formatISO9075, format } from 'date-fns';

export default function Post({ title, summary, content, image, createdAt }) {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://techcrunch.com/wp-content/uploads/2017/03/cyclops2-2017-0106-underwater.jpg?w=990&crop=1'
          alt='oceangate sub'
        />
      </div>

      <div className='content'>
        <h2>{title}</h2>
        <div className='info'>
          <a className='author'>Sam O'Cain</a>
          <time>{format(new Date(createdAt), 'MMM d yyyy hh:mm')}</time>
        </div>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}
