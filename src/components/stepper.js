import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Establecemos comunicación',
        description: `Nos mandas un correo y programamos una visita para ir a tu
    empresa en persona .`,
    },
    {
        label: 'Evaluación y planificación',
        description:
            'Determinamos tus necesidades específicas para hacer tus ventanas ideales.',
    },
    {
        label: 'Fabricación e instalación',
        description: `Fabricamos tus ventanas y las venimos a instalar directamente en tu empresa.`,
    },
];

export const StepperComponent = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 550 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="h6">Último paso</Typography>
                                ) : null
                            }
                        >
                            <h4 className="mt-2">{step.label}</h4>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="h6">{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        className="fs-6"
                                    >
                                        {index === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                        className="fs-6"
                                    >
                                        Anterior
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ pt: 1, p: 3 }}>
                    <Typography variant="h6">Eso es todo, presiona "reiniciar" para leer los pasos de nuevo</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} className="fs-6 fw-bolder mt-2" variant="contained">
                        Reiniciar
                    </Button>
                </Paper>
            )}
        </Box>
    );
}


/**
 * 
 * <GlobalStyles styles={{size:  }} />
*/