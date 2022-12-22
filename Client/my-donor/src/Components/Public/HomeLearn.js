import React from 'react';
import { Table } from "reactstrap";

function Learn() {
  return (
    <div className='mt-56'>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto hidden lg:block lg:w-8/12 bg-cover rounded-l-lg"><Table striped>
                <thead>
                  <tr style={{ backgroundColor: 'darkred', color: 'white' }}>
                    <th colSpan={3}>Compatible Blood Type Donors</th>
                  </tr>
                  <tr style={{ fontWeight: 'bolder' }}>
                    <th>Blood Type</th>
                    <th>Donate Blood To</th>
                    <th>Receive Blood From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: 'darkred' }}>A+</td>
                    <td>A+  AB+</td>
                    <td>A+  A-  O+  O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>O+</td>
                    <td>O+  A+  B+  AB+</td>
                    <td>O+  O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>B+</td>
                    <td>B+  AB+</td>
                    <td>B+  B-  O+  O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>AB+</td>
                    <td>AB+</td>
                    <td>Everyone</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>A-</td>
                    <td>A+  A-  AB+  AB-</td>
                    <td>A-  O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>O-</td>
                    <td>Everyone</td>
                    <td>O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>B-</td>
                    <td>B+  B-  AB+  AB-</td>
                    <td>B-  O-</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'darkred' }}>AB-</td>
                    <td>AB+  AB-</td>
                    <td>AB-  A-  B-  O-</td>
                  </tr>
                </tbody>
              </Table></div></div>
          <div className="w-full lg:w-8/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center" style={{ color: 'red' }}><u>Learn About Donation</u></h3>
            <p className="pt-4 text-2xl text-center-justify">After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;