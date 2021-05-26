import React from "react";
import { connect } from "react-redux";

import "./PostPreview.css";

// mapStateToProps принимает текущее значение стейта в сторе (ВСЕ) и возвращает объект данных, на которые подписывается компонент;
// компонент получит эти данные в пропсах
const mapStateToProps = (state) => ({
  title: state.post.title,
  image: state.post.image,
  body: state.post.body,
  theme: state.theme.theme,
});

const PostPreviewComponent = ({ theme, title, image, body, ownProp }) => {
  const containerClassName = `post-preview ${theme}`;

  return (
    <>
      <h1>Post preview</h1>
      <div className={containerClassName}>
        {title && <h1>{title}</h1>}
        {image && <img className="img" src={image} alt="post pic" />}
        {body && <div className="body">{body}</div>}
      </div>
    </>
  );
};

// connect возвращает НОВЫЙ компонент, которому добавляются пропсы согласно mapStateToProps и mapDispatchToProps
export const PostPreview = connect(mapStateToProps)(PostPreviewComponent);
