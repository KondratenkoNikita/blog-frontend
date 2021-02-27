import React, { memo, useState } from 'react';
import { useStyles } from './styles';

const Home: React.FC = (): React.ReactElement => {
  const styles = useStyles();
  const [tmp] = useState('tmp');

  return (
    <>
      {tmp}
    </>
  );
};

export default memo(Home);
