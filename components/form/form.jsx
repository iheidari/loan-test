import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';

const Form = ({ children }) => {
  return (
    <Grid container direction="column">
      {children}
    </Grid>
  );
};

const Control = styled.div`
  padding: 5px 0;
`;

export { Form as default, Control };
