import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "../styles/home.css"

const steps = [
    {
        label: 'Establecemos comunicación',
        description: 
            `Nos mandas un correo y programamos una visita para ir a tu empresa en persona.`,
    },
    {
        label: 'Evaluación y planificación',
        description:
            'Determinamos las necesidades específicas para hacer tus ventanas ideales.',
    },
    {
        label: 'Fabricación e instalación',
        description: `Fabricamos tus ventanas y las venimos a instalar directamente a tu empresa.`,
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
                                    <h5 className="stepper">Último paso</h5>
                                ) : null
                            }
                        >
                            <h4 className="mt-2 stepper">{step.label}</h4>
                        </StepLabel>
                        <StepContent>
                            <h5 className="stepper">{step.description}</h5>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        <h6 className="stepper pt-2">{index === steps.length - 1 ? 'Terminar' : 'Siguiente'}</h6>
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        <h6 className="stepper pt-2">Anterior</h6>
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ pt: 1, p: 3 }}>
                    <h5 className='stepper'>Eso es todo, presiona "reiniciar" para leer los pasos de nuevo</h5>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} variant="contained">
                        <h6 className="stepper pt-2">Reiniciar</h6>
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