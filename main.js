const h = React.createElement;

let generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

// Dummy data initially populates WassupList.
const initialPosts = [
    {
        id: 1,
        userName: 'Matsuo Basho',
        date: new Date(),
        content: "An old silent pond... A frog jumps into the pond, splash! Silence again."
    },
    {
        id: 2,
        userName: 'Matsuo Basho',
        date: new Date(),
        content: "Autumn moonlight— a worm digs silently into the chestnut."
    },
    {
        id: 3,
        userName: 'Kobayashi Issa',
        date: new Date(),
        content: "Trusting the Buddha, good and bad, I bid farewell To the departing year."
    },
];

// Takes user input and sends data to Homepage
class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: '',
            userName: '',
        }
    }
    render () {
        return <form
            onSubmit={event => {
                event.preventDefault();
                if (this.state.newWassup !== '' && this.state.userName !== '') {
                    let newPost = {
                        id: generateId(),
                        userName: this.state.userName,
                        date: new Date(),
                        content: this.state.newWassup
                    }
                    this.props.makeWassup(newPost);
                    this.setState({
                        newWassup: ''
                    })
                }
            }
        }>
        <input
            type="text"
            value={this.state.newWassup}
            placeholder="What's up?"
            onChange={event => 
                this.setState({newWassup : event.target.value})
            }
        />
        <input 
            type="text"
            value={this.state.userName}
            placeholder="What's your name?"
            onChange={event => 
                this.setState({userName : event.target.value})
            }
        />
        <input type="submit" value="Go"/>
    </form>
    }
}

// Builds each post
let WassupRow = props => {
    return <li>
            <h3>{ props.post.content }</h3>
            <p>{ props.post.userName + ' on ' + props.post.date }</p>
        </li>
};

// Holds all old and new posts
let WassupList = props => {
    return <ul>
        { props.posts.map(post => 
            <WassupRow 
                post={post}
                key={post.id}
            />
        )}
    </ul>
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
            newPosts.unshift(newWassup);
            this.setState({
                posts: newPosts
            })
        };

        return <main>
            <h1>Wasssup?</h1>
            <WassupForm posts={this.state.posts} makeWassup={makeWassup} />
            <WassupList posts={this.state.posts} />
            <footer>Copyright 2018</footer>
        </main>
    }
};

ReactDOM.render(< Homepage data={initialPosts} />, document.querySelector('.react-root'));