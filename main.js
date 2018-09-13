const h = React.createElement;

// Dummy data initially populates WassupList.
const initialPosts = [
    {
        id: 1,
        userId: 1,
        date: 'August 5, 2018',
        content: 'Removed greater to do ability. You shy shall while but wrote marry.'
    },
    {
        id: 2,
        userId: 1,
        date: 'August 22, 2018',
        content: 'Me burst ample wrong which would he could.'
    },
    {
        id: 3,
        userId: 1,
        date: 'September 1, 2018',
        content: 'Questions we additions is extremely incommode.'
    },
];

// Takes user input and sends data to Homepage
let WassupForm = props => {
    return h('form', {}, [
        h('input', { placeholder: "What's up?" }),
        h('button', {}, 'Post')
    ])
}

// Builds each post
let WassupRow;

// Holds all old and new posts
let WassupList

// Builds page and keeps track of state
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.data
        }
    };
    render() {
        return h('main', {}, [
            h(WassupForm, this.state.posts)
        ])
    }
};

ReactDOM.render(h(Homepage, { data: initialPosts }), document.querySelector('.react-root'));