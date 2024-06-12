import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <svg className={css.iconLogoContainer}>
        <use href='/src/assets/sprite.svg#icon-logo'></use>
      </svg>
      <p>Task Pro</p>
    </div>
  );
};

export default Logo;
