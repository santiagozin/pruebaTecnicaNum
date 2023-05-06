import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


const Grafico = () => {

    function Example(props) {
        return (
          <div style={{ marginBottom: 80 }}>
            <div style={{ marginTop: 30, display: "flex" }}>
              <div style={{ width: "70%", paddingRight: 30 }}>{props.children}</div>
              <div style={{ width: "30%" }}>
                <h3 className="h5 tit-h5">{props.label}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        );
      }

    const percentage = 66;
  return (
  
    <Example label="Posición">
      <CircularProgressbar
        value={percentage}
        strokeWidth={50}
        styles={buildStyles({
          strokeLinecap: "butt",
           
        })}
        
      />
    </Example>

    
  )
}

export default Grafico;