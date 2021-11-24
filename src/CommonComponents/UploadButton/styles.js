import styled from 'styled-components';
import { ReactComponent as Upload } from '../../assets/svgs/upload.svg';
import colors from '../../EmployeePortal/themes/colors';

const UploadSvg = styled(Upload)`
  color: ${colors.primary};
  height: 30px;
  width: 30px;
  padding-left: 5px;
`;

export default UploadSvg;
