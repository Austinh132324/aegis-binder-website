import { useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { LogoLockup } from '../../components/ui/LogoLockup';
import { Button } from '../../components/ui/Button';
import './Login.css';
import './Login.mobile.css';

export default function Login() {
  useEffect(() => {
    document.title = 'Login | Aegis Binder';
  }, []);

  return (
    <section className="ab-login">
      <Container>
        <div className="ab-login__card">
          <LogoLockup variant="shield" size="lg" asLink={false} />
          <h1 className="ab-login__title">Portal login, coming soon.</h1>
          <p className="ab-login__copy">
            The Aegis Binder portal is on its way. In the meantime, if you’d like early access or want to learn more
            about the platform, we’d love to hear from you.
          </p>

          <div className="ab-login__actions">
            <Button to="/contact" size="lg">
              Request access
            </Button>
            <Button to="/" variant="secondary" size="lg">
              Back to home
            </Button>
          </div>

          <p className="ab-login__fineprint">
            This placeholder will be replaced with the live portal login when the Aegis Binder app is ready.
          </p>
        </div>
      </Container>
    </section>
  );
}
