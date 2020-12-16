
'() => use strict';

const e = React.createElement;

class LikeButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { liked: false };
    }

    render()
    {
        if (this.state.liked)
        {
            return 'You liked this.';
        }

        return e(
            'button', // html element
            { onClick: () => this.setState({ liked: true }) }, // properties (in obj notation)
            'Like' // (inner html)
        );
    }
}


// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), document.getElementById('contact'));
ReactDOM.render(e('h1', null, 'hello'), document.getElementById('contact'));







