import React from 'react';
import * as styles from './styles';
import { Card } from '../card';

const PhotoCard = ({image, name, icon, ...props}) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.container}>
            <img src={image} alt='student' />
            <Card name={name} icon={icon} whileHover={{borderRadius: '5px', scale: 1.05}} {...props} />
        </div>
    </div>
  )
}

export { PhotoCard };