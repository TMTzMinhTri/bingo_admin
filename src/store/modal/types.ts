import { DialogProps } from '@mui/material';
import React from 'react';

export type BodyType = string | React.ReactNode | (() => React.ReactNode);

export interface IModalReducer {
  isOpen: boolean;
  title?: BodyType;
  body?: BodyType;
  buttonCancelText?: string;
  buttonSubmitText?: string;
  onConfirm?: Function;
  onClose?: Function;
}

export type ModalOptions = Omit<IModalReducer, 'isOpen'>;
