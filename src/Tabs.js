import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="За нас" {...a11yProps(0)} />
          <Tab label="Местоположение и контакти" {...a11yProps(1)} />
          <Tab label="Стаи и цени" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p>
            Семеен хотел Мария Гарден, Кранево е новоотркит бутиков комплекс. Обектът е с обособени парко места и
            видеонаблюдение. Осигурен е безплатен Wi-Fi достъп в цялата сграда. Стаите разполагат с тераси.{' '}
          </p>
          <p>
            Сградата се намира на близко разстояние както от централната плажна ивица – 4 мин пеша, така и от главната
            търговска улица - 3 минути пеша. До хотела има супермаркет и аптека. На място се продават ръчно изработени
            керамични изделия, произведени от самите собственици на хотела.
          </p>
          <p>
            Хотелът разполага с барче, голям двор, където предоставя още едно място за отдих - лятна кухня с барбекю
            даващо възможност сами да приготвите вашата храна, което я правят идеално място за семейна почивка. На
            рецепцията се предлагат екскурзии до забележителности в региона и оферти за летене с парапланер.
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="location">
            <div>
              <p>
                Хотелът е само на 1.5 километра от Албена (по плажа), 4 км с кола, на 7 километра от Златни пясъци и на
                23 км от летище Варна.
              </p>
              <p>Телефон за връзка: +359 886358225</p>
            </div>
            <div>
              <iframe
                width="500"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Kranevo%20%20Maria%20Garden&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://embedgooglemap.net/maps/44"></a>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
