import React, { ReactNode } from 'react';
import "./card.css";

type CardProps = {
    title?: string,
    children?: ReactNode,
    icon?: string,
}

type CardState = {
    counter: number,
}

export class Card extends React.Component<CardProps,CardState> {
    state: CardState = {
        counter: 0,
    };

    render() {
      return <div className="card">
            <h1 className='card-title'>
                <img src={this.props.icon} className="card-title-icon" alt="icon"/>
                {this.props.title}
            </h1>
            <body>
                {this.props.children}
            </body>
        </div>;
    }
}