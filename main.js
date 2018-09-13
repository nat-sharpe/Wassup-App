const h = React.createElement;

let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

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
class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }
    render () {
        return h('form', {
            onSubmit: (event) => {
                event.preventDefault();
                let newPost = {
                    id: generateId(),
                    userName: 'Nat',
                    date: new Date(),
                    content: this.state.newWassup
                }
                this.props.makeWassup(newPost);
            }
        },
            h('input', { 
                type: 'text',
                value: this.state.newWassup,
                placeholder: "What's up?",
                onChange: (event) => {
                    console.log(event.target.value);
                    this.setState({newWassup : event.target.value})
                }
            }),
            h('input', { type: 'submit', value: 'Go' })
        )
    };
}

// Builds each post
let WassupRow = props => {
    return h('li', {},
        h('h3', {}, props.post.content),
        h('p', {}, props.post.userName + ' on ' + props.post.date),
    )
};

// Holds all old and new posts
let WassupList = props => {
    return h('ul', {}, 
        props.posts.map(post => 
            h(WassupRow, {
                post: post,
                key: post.id
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

        let makeWassup = newWassup => {
            let newPosts = this.state.posts;
            newPosts.push(newWassup);
            this.setState({
                posts: newPosts
            })
        };

        return h('main', {},
            h('h1', {}, 'Wassup!'),
            h(WassupForm, {posts: this.state.posts, makeWassup: makeWassup}),
            h(WassupList, {posts: this.state.posts}),
            h('footer', {}, 'Copyright 2018'),
        )
    }
};

ReactDOM.render(h(Homepage, { data: initialPosts }), document.querySelector('.react-root'));