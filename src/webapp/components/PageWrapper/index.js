export default ({ children }) => (
  <div className="page-wrapper">
    {children}
    <style jsx>
      {`
        .page-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media screen and (max-width: 1300px) {
          .page-wrapper {
            padding: 0 32px;
          }
        }

        @media screen and (max-width: 480px) {
          .page-wrapper {
            padding: 0 16px;
          }
        }

        @media screen and (max-width: 360px) {
          .page-wrapper {
            padding: 0 8px;
          }
        }
      `}
    </style>
  </div>
);
