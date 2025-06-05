declare module 'react-slick' {
    import React from 'react';

    // Type definitions for react-slick 0.28
    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        nextArrow?: React.ReactNode;
        prevArrow?: React.ReactNode;
        dotsClass?: string;
        appendDots?: (dots: React.ReactNode) => React.ReactNode;
        customPaging?: (i: number) => React.ReactNode;
        [key: string]: unknown;
    }

    export default class Slider extends React.Component<Settings> { }
}