const DotMatrix = ({ className = "", density = "normal", opacity = "5" }) => {
    let dotRows, dotsPerRow, spacing;
    
    switch (density) {
      case "dense":
        dotRows = 40;
        dotsPerRow = 60;
        spacing = "m-2";
        break;
      case "sparse":
        dotRows = 10;
        dotsPerRow = 15;
        spacing = "m-8";
        break;
      case "normal":
      default:
        dotRows = 20;
        dotsPerRow = 30;
        spacing = "m-4";
    }
    
    return (
      <div className={`absolute -z-10 w-full h-full overflow-hidden flex flex-col ${className}`}>
        {[...Array(dotRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {[...Array(dotsPerRow)].map((_, dotIndex) => {
              const isVisible = (rowIndex + dotIndex) % 3 === 0;
              return (
                <div 
                  key={dotIndex} 
                  className={`w-1 h-1 ${spacing} rounded-full ${isVisible ? `bg-light opacity-${opacity}` : 'bg-transparent'}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
  
  export default DotMatrix;