import template from './app.html';
import './app.styl';

let appComponent = ()=>{
    return {
        template, // because we have a variable name template we can use the shortcut here
        restrict: 'E'
    };
};

export default appComponent;