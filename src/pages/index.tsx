import * as React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentTab, selectListTabs } from '@/store/tab/selector';
import { tabActions } from '@/store/tab';
import { Box } from '@mui/system';
import { modalActions } from '@/store/modal';
import { IModalReducer, ModalOptions } from '@/store/modal/types';

export default function Index() {
  const dispatch = useDispatch();

  const showModal = () => {
    const config: ModalOptions = {};
    dispatch(modalActions.open(config));
  };

  return (
    <Box>
      <Button onClick={showModal} variant='contained' color='secondary'>Show Modal</Button>
    </Box>
  );
}
