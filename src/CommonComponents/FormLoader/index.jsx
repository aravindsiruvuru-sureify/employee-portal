import React from 'react';
import Loader from 'react-loader-spinner';
import { Cover, LoaderContainer } from './styles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import colors from '../../EmployeePortal/themes/colors';

const FormLoader = () => {
  return (
    <Cover>
      <LoaderContainer>
        <Loader
          type="MutatingDots"
          color={colors.primary}
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </LoaderContainer>
    </Cover>
  );
};

export default FormLoader;
