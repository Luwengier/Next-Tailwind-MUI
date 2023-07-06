'use client'

import { styled } from '@mui/system'
import Button, { buttonClasses } from '@mui/base/Button'

const Home = () => {
  return (
    <div className="h-screen w-full p-6">
      <h3 className="text-5xl antialiased font-medium">I&apos;m Home Page.</h3>

      <div className="flex gap-x-3">
        <CustomButton>Button</CustomButton>
        <CustomButton disabled>Disabled</CustomButton>
      </div>
    </div>
  )
}

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
}

const grey = {
  100: '#eaeef2',
  300: '#afb8c1',
  900: '#24292f',
}

const CustomButton = styled(Button)(
  ({ theme }) => `
  &.${buttonClasses.root} {
    font-weight: bold;
    background-color: ${blue[500]};
    font-size: 0.875rem;
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[100]
    };
  }

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `
)

export default Home
