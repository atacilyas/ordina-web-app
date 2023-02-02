import React, { ReactNode } from 'react';
import "./wind-direction.css";
import t from '../../i18n/i18n';

export type WindDirectionProps = {
    degrees : number;
}

export class WindDirection extends React.Component<WindDirectionProps> {
    render(): React.ReactNode {
        let degreesRotated = -45-90+this.props.degrees;
        let styleString = "rotate(" + degreesRotated.toString() + "deg)";
        return <div className='wind-direction-border'>
             <p className='north'>{t('north-short')}</p>
             <p className='east'>{t('east-short')}</p>
             <p className='south'>{t('south-short')}</p>
             <p className='west'>{t('west-short')}</p>
             <i className="arrow right" style={{transform: styleString}}></i>
        </div>;
    }
}