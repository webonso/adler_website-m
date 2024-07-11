import LoginForm from '@/app/login/LoginForm';
import { Fragment, Suspense } from 'react';

const LoginPage = async () => {

  

  return (
    <Fragment>
      <section
        className="h-screen w-full flex flex-col items-center 
      justify-center mx-auto"
      >
        <Suspense fallback="Loading...">
          <LoginForm />
        </Suspense>
      </section>
    </Fragment>
  );
};

export default LoginPage;
