import React, { useState } from 'react';
import ProgressBar from './ImgDownloadScale';

const ImgUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  //checks the file format to be image(png or jpeg)
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
        <input className="uploadLabel" type="file" onChange={handleChange} />
        <span className="uploadSpan">+</span>
      </label>
      <div className="output">
        {/* outputs either error, file name or progress bar */}
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default ImgUploadForm;