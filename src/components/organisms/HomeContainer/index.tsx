import { notificationActions } from '@/store/notification';
import { Button, Card, CardContent, Container } from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('home mounted');

    return () => {
      console.log('home unmount');
    };
  }, []);

  const showToast = () => {
    dispatch(notificationActions.showToast({ message: 'test', options: { variant: 'success' } }));
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Button onClick={showToast}>toast</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomeContainer;
