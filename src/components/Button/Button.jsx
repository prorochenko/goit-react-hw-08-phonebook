import PropTypes from 'prop-types';
import css from './Button.module.scss';
import { Button } from '@chakra-ui/react';

const ButtonList = ({ title }) => {
  return (
    <div className={css.container}>
      <Button colorScheme="yellow" size="lg" borderRadius="50px" type="submit">
        {title}
      </Button>
    </div>
  );
};

ButtonList.propTypes = {
  title: PropTypes.string,
};
export default ButtonList;
