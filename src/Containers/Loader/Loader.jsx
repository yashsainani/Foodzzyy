import styles from './Loader.module.css';

const Loader = () => {

    const text = "WAIT-FOR-A-WHILE-IT'S-LOADING...";

    // Split the text into individual letters and map over them
    return (
      <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "100px", marginTop: "100px" }}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`,
              opacity: 0, // Make sure the text starts invisible
              display: "inline-block",
              fontWeight: "bold",
              fontSize: "24px",
              padding: "100px",
              color: "#690B22",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
};

export default Loader;