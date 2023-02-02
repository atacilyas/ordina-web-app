import React, { ReactNode } from 'react';
import "./wind-direction.css";

export type WindDirectionProps = {
    degrees : number;
}

export class WindDirection extends React.Component<WindDirectionProps> {
    render(): React.ReactNode {
        let degreesRotated = -45-90+this.props.degrees;
        let styleString = "rotate(" + degreesRotated.toString() + "deg)";
        return <div className='wind-direction-border'>
             <p className='north'>N</p>
             <p className='east'>E</p>
             <p className='south'>S</p>
             <p className='west'>W</p>
             <i className="arrow right" style={{transform: styleString}}></i>
        </div>;
    }
}