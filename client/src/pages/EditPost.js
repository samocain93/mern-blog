import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

export default function EditPost() {
    const { id } = useParams()
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
    .then(response => {
        response.json()
        .then(postInfo => {
            setTitle(postInfo.title)
            setContent(postInfo.content)
            setSummary(postInfo.summary)
        })
    })
  })

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  function updatePost(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type='title'
        placeholder={'Title'}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type='summary'
        placeholder={'Summary'}
        value={summary}
        onChange={(e) => {
          setSummary(e.target.value);
        }}
      ></input>
      <input type='file' onChange={(e) => setFiles(e.target.files)}></input>
      <Editor onChange={setContent} value={content} />
      <button className='create-btn'>Create Post</button>
    </form>
  );
}
