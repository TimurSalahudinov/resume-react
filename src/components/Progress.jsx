import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
const MyProgress = () => {
    
    return (
        
            <div >
 <ProgressBar style={{height: 15}} now={100} label={`HTML, CSS ${100}%`} />;
 <ProgressBar style={{height: 15}} now={85} label={`JS ${85}%`} />;
 <ProgressBar style={{height: 15}} now={50} label={`React ${50}%`} />;
 <ProgressBar style={{height: 15}} now={100} label={`Бить баклуши ${100}%`} />;
    </div>

        
    );
};

export default MyProgress;