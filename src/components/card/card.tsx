import React, { ReactNode } from 'react';
import "./card.css";

type CardProps = {
    title?: string,
    children?: ReactNode,
    icon?: string,
}

export class Card extends React.Component<CardProps> {
    render() {
      return <div className="card">
            <h1 className='card-title'>
                <img src={this.props.icon} className="card-title-icon" alt="icon"/>
                {this.props.title}
            </h1>
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}