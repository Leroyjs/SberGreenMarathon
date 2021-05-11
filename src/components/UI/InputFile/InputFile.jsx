import React, { useRef, useState } from 'react';
import './style.scss';

import photoImg from './media/phpto.svg';
import closeImg from './media/close.svg';

export const InputFile = ({ handler, error }) => {
    const _input = useRef(null);
    const [files, setFiles] = useState([]);

    const handleChange = (event) => {
        for (let x = 0; x < event.target.files.length; x++) {
            const reader = new FileReader();
            let img = '';
            reader.onload = (event) => {
                img = event.target.result;
                // img.name = _input.current.files[x].name;
                setFiles((prev) => [...prev, img]);
                handler([...files, img]);
            };

            reader.readAsDataURL(event.target.files[x]);
        }
    };
    const handleDel = (index) => {
        setFiles((prev) => {
            const newArray = prev.slice(0);
            newArray.splice(index, 1);
            handler(newArray);
            return newArray;
        });
    };
    return (
        <>
            <div
                className={
                    'input-file__wrapper ' +
                    (error ? 'input-file_error' : undefined)
                }
            >
                {files.map((item, index) => (
                    <div className="input-file__img-loaded-wrapper" key={index}>
                        <img
                            src={closeImg}
                            alt=""
                            className="input-file__del"
                            onClick={() => handleDel(index)}
                        />
                        <img
                            src={item}
                            alt=""
                            className="input-file__img-loaded"
                        />
                    </div>
                ))}
                <label
                    className={
                        'input-file planted-tree-main__input-file ' +
                        (files.length ? 'input-file_active' : undefined)
                    }
                >
                    <input
                        onChange={(e) => handleChange(e)}
                        ref={_input}
                        className="input-file__none"
                        type="file"
                        multiple
                    />
                    <img src={photoImg} alt="" className="input-file__img" />
                    <span className="input-file__text">
                        Загрузить или сделать фото
                    </span>
                </label>
            </div>
            {error && <div className="input-file__error">{error}</div>}
        </>
    );
};
