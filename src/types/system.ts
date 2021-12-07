import { NextComponentType, NextPageContext } from 'next';
import { ComponentType } from 'react';

export type AppPageType<I = any, P = any> = NextComponentType<NextPageContext, I, P> & {
  Layout?: ComponentType;
  hideHeader?: boolean;
  hideFooter?: boolean;
};
