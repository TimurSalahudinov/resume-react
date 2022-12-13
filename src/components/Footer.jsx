import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function MyFooter() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='https://makers.kg/'>
          Салахудинов Тимур JS27
        </a>
      </div>
    </MDBFooter>
  );
}