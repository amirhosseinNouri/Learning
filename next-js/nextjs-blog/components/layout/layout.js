import s from './layout.module.css';

export default function Layout({ children }) {
  return <div className={s.container}>{children}</div>;
}
