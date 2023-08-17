import React from 'react';

const ErrorPage = () => {
   console.error(error);

   return (
      <div id="error-page">
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i>{error.message}</i>
         </p>
      </div>
   );
};

export default ErrorPage;