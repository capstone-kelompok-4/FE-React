import React from 'react';

function ProgressBar({bgcolor,progress,height}) {
  const parentDiv = {
		height: height,
		width: '100%',
		backgroundColor: '#e2e2e2',
		borderRadius: 40,
    marginBottom: 10,
	}
	
	const childDiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	  borderRadius: "40px",
		textAlign: 'right',
	}
	
	// const progressText = {
	// 	padding: 10,
  //   margin: 0,
	// 	color: 'black',
	// 	fontWeight: 500,
	// }

  return (
    <div style={parentDiv}>
      <div style={childDiv}>
        {/* <span style={progressText}>{`${progress}%`}</span> */}
      </div>
    </div>
  )
}

export default ProgressBar;
