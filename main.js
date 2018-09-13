const h = React.createElement;

// Dummy data initially populates WassupList.
const initialPosts = [
    {
        id: 1,
        userName: 'Nat',
        date: 'August 5, 2018',
        content: 'Removed greater to do ability. You shy shall while but wrote marry.'
    },
    {
        id: 2,
        userName: 'Nat',
        date: 'August 22, 2018',
        content: 'Me burst ample wrong which would he could.'
    },
    {
        id: 3,
        userName: 'Nat',
        date: 'September 1, 2018',
        content: 'Questions we additions is extremely incommode.'
    },
];

// Takes user input and sends data to Homepage
let WassupForm = props => {
    return h('form', {}, [
        h('input', { placeholder: "What's up?" }),
        h('button', { type: 'submit' }, 'Post')
    ])
}

// Builds each post
let WassupRow = props => {
    console.log(props)
    return h('li', {}, [
        h('h3', {}, props.post.userName + ' on ' + props.post.date),
        h('p', {}, props.post.content)
    ])
};

// Holds all old and new posts
let WassupList = props => {
    return h('ul', {}, 
        props.posts.map(post => 
            h(WassupRow, {
                post: post
            })
        )
    );
};

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
            h('h1', {}, 'Wassup!'),
            h(WassupForm, {posts: this.state.posts}),
            h(WassupList, {posts: this.state.posts})
        ])
    }
};

ReactDOM.render(h(Homepage, { data: initialPosts }), document.querySelector('.react-root'));