/* eslint-disable i18next/no-literal-string */
import React from 'react';

import s from './MainLayout.module.scss';
import clsx from 'clsx';
import { Container } from '@/shared/ui';

type Props = {
  navbar: React.ReactElement;
  header: React.ReactElement;
  content: React.ReactElement;
};

export const MainLayout = (props: Props) => {
  const { navbar, content, header } = props;

  return (
    <div className={clsx(s.root)}>
      {header}
      {navbar}
      <Container className={s.content}>{content}</Container>
    </div>
  );
};
