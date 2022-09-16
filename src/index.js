import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image-file-input/image-file-input';


const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  return <ImageFileInput  imageUploader={imageUploader}/>
}
// function FileInput(props) {
//   return  <ImageFileInput {...props} imageUploader={imageUploader}/>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>
);


