import React from "react";
import { connect } from "react-redux";
import { handleTitleChange, handleBodyChange, handleImageChange } from "../../actions/post";
import { handleThemeChange } from "../../actions/theme";

import "./CreatePost.css";

// mapStateToProps принимает текущее значение стейта в сторе (ВСЕ) и возвращает объект данных, на которые подписывается компонент;
// компонент получит эти данные в пропсах
const mapStateToProps = (state) => ({
  title: state.post.title,
  image: state.post.image,
  body: state.post.body,
  theme: state.theme.theme,
});

// mapDispatchToProps принимает ф-ию dispatch - ф-ия для отправки экшенов
// возвращает объек с ф-иями, который диспатчат экшены
// эти ф-ии компонент получит в кач-ве пропсов
// в dispatch нужно передать action
// action - это объект с 2 полями: type, payload
const mapDispatchToProps = (dispatch) => ({
  dispatchOnTitleChange: (newTitle) => dispatch(handleTitleChange(newTitle)),
  dispatchOnImageChange: (imgSrc) => dispatch(handleImageChange(imgSrc)),
  dispatchOnBodyChange: (body) => dispatch(handleBodyChange(body)),
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
});

const CreatePostComponent = ({
  title,
  image,
  body,
  theme,
  dispatchOnTitleChange,
  dispatchOnImageChange,
  dispatchOnBodyChange,
  dispatchOnThemeChange,
}) => {
  const onTitleChange = (e) => {
    dispatchOnTitleChange(e.target.value);
  };

  const onImageChange = (e) => {
    dispatchOnImageChange(e.target.value);
  };

  const onBodyChange = (e) => {
    dispatchOnBodyChange(e.target.value);
  };

  const onThemeChange = (e) => {
    dispatchOnThemeChange(e.target.value);
  };

  return (
    <div className="create-post">
      <h1>Create post</h1>
      <div className="field">
        <input placeholder="Title" value={title} onChange={onTitleChange} />
      </div>

      <div className="field">
        <input placeholder="Image url" value={image} onChange={onImageChange} />
      </div>

      <div className="field">
        <div>Post body:</div>
        <textarea placeholde="Post body" value={body} onChange={onBodyChange} />
      </div>

      <div className="filed">
        <div>Theme:</div>
        <select value={theme} onChange={onThemeChange}>
          <option value="day">Day</option>
          <option value="night">Night</option>
        </select>
      </div>
    </div>
  );
};

// connect возвращает НОВЫЙ компонент, которому добавляются пропсы согласно mapStateToProps и mapDispatchToProps
export const CreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePostComponent);
