export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- StyledJSX -</p>
        <button>FIGHT</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #222;
          borderradius: 20px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
      
      `}</style>
    </>
  );
};
