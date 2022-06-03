import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Service extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'Lorem ipsum dolo sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolo sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Lorem ipsum dolo sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Lorem ipsum dolo sit amet consectetur adipisicing elit. Magni, corporis!'
            }
        ]
    }; 
    render() {
        return (
            <section className="services">
                <Title title="Serivces" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}