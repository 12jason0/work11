import React from 'react';
import styles from './styles/cssModule.module.css';

// CSS Module
// - 클래스명 중복 방지
// - CSS 파일 확장자 : .module.css
// - react 컴포넌트 파일에서 해당 css 파일을 불러올 때,
//      css 파일에 선언한 클래스 이름들이 고유한 값을 가짐
// - 고유 css 클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해시값 등이 쓰임
export default function CssModuleComponents() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={[styles.box, styles.yellow].join(' ')}></div>
      {/* 동적이 아니면 className={`${styles.box} {$styles.yellow}`} */}
    </div>
  );
}
