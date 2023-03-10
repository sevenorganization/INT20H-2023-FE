import * as styles from './styles';
import { useState } from 'react';
import { SignInForm } from '../sign-in';
import { SignUpForm } from '../sign-up';
import { ResetPassword, TechnicalSupport } from '../forgot-password';
import { Verify } from '../verify';
import { EnterCredentials } from '../enter-credentials';
import { Background } from 'components/primitives';
import { motion } from 'framer-motion';

const Sign = () => {

  const [signInVisible, setSignInVisible] = useState(true);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
  const [technicalSupportVisible, setTechnicalSupportVisible] = useState(false);
  const [verifyVisible, setVerifyVisible] = useState(false);
  const [credentialsVisible, setCredentialsVisible] = useState(false);

  const forms = {
    SIGN_IN: {
      id: 'sign-in',
      state: setSignInVisible
    },
    SIGN_UP: {
      id: 'sign-up',
      state: setSignUpVisible
    },
    RESET: {
      id: 'reset',
      state: setResetPasswordVisible
    },
    SUPPORT: {
      id: 'support',
      state: setTechnicalSupportVisible
    },
    VERIFY: {
      id: 'verify',
      state: setVerifyVisible
    },
    CREDENTIALS: {
      id: 'credentials',
      state: setCredentialsVisible
    }
  }

  const toggleForms = (e) => {
    e.preventDefault();
    Object.values(forms).map(value => value.state(e.target.id === value.id));
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.layout}>
        <div css={styles.aside}>
          <Background />
        </div>
        <motion.div css={styles.signForm}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            {signInVisible && <SignInForm toggleForms={toggleForms} forms={forms} />}
            {signUpVisible && <SignUpForm toggleForms={toggleForms} forms={forms} />}
            {resetPasswordVisible && <ResetPassword toggleForms={toggleForms} forms={forms} />}
            {technicalSupportVisible && <TechnicalSupport toggleForms={toggleForms} forms={forms} />}
            {verifyVisible &&  <Verify toggleForms={toggleForms} forms={forms} />}
            {credentialsVisible && <EnterCredentials toggleForms={toggleForms} forms={forms} />}
        </motion.div>
      </div>
    </div>
  )
}

export default Sign;