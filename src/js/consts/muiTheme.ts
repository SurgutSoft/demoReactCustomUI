import {createMuiTheme} from "@material-ui/core/styles";
import styles from '../components/usage/Chart/Chart.module.scss';
import {useMediaQuery, useTheme} from "@material-ui/core";

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: styles.barColorFood,
    },
  },
});


export const isMobile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMediaQuery(theme.breakpoints.down('xs'));
}
