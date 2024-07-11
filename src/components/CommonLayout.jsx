'use client';
import { usePathname } from 'next/navigation';
import Header from './header/Header';

export default function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== '/admin' ? <Header /> : null}
      {children}
    </>
  );
}
