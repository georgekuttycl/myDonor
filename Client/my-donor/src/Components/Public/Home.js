
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://img.freepik.com/free-vector/cartoon-blood-donation-background_52683-70799.jpg?w=1060&t=st=1671049575~exp=1671050175~hmac=11b342a6ae5092a16d696f744df92689bb7c89b019310efd457c47c0485d305d',
  },
  {
    label: 'Bird',
    imgPath:
      'https://img.freepik.com/free-vector/gradient-world-blood-donor-day-illustration_52683-61655.jpg?w=900&t=st=1671049656~exp=1671050256~hmac=31ef18672e2eb100568c7e38aa9dd5c039a9b86ef94e73e94edcd5a705879c5e',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://img.freepik.com/free-vector/happy-world-blood-donor-day-red-grey-yellow-background-social-media-design-banner-free-vector_1340-21612.jpg?w=1060&t=st=1671049698~exp=1671050298~hmac=94d87e3ed03e59d53edfd9fdd73a7fbac93c29728008641ffdd6e99623e86e0a',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://img.freepik.com/free-vector/human-blood-donate-heart-rate-white-background_1308-111050.jpg?w=1380&t=st=1671049737~exp=1671050337~hmac=dc76384904c0240595146155a296f226ce1e5bac06c4787d36014accc1f92d82',
  },
];

function Home(){

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
      setActiveStep(step);
    };


    return(
    <div>
        <br></br>
        <br></br>
        <br></br>
         <Box sx={{ maxWidth: 1400, flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height:'100vh',
                    display: 'block',
                    maxWidth: 1400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >

            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>

            </Button>
          }
        />
      </Box>

    </div>
    );
}

export default Home;