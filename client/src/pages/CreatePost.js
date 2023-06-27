import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

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

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  return (
    <form>
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
      <input type='file'></input>
      <ReactQuill
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        modules={modules}
        formats={formats}
      />
      <button className='create-btn'>Create Post</button>
    </form>
  );
}
