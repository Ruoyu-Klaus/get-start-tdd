/*
 * @Author: Ruoyu
 * @FilePath: /cicd-github-actions/client/src/Components/Button/Button.js
 */
import React from 'react';
import styles from './Button.module.css';
import classnames from 'classnames/bind';
let cx = classnames.bind(styles);

function Button(props) {
  const { size, type, children } = props;
  let className = cx({
    base: true,
    primary: type ? type === 'primary' : true,
    secondary: type === 'secondary',
    large: size === 'large',
    middle: size ? size === 'middle' : true,
    small: size === 'small',
  });

  return <button className={className}>{children}</button>;
}

export default Button;
