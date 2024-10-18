const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://picsum.photos/seed/1/200/200",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://picsum.photos/seed/2/200/200",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://picsum.photos/seed/3/200/200",
        balance: 0,
    },
];

export default function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <FormAddFriend />
                <Button>Add friend</Button>
            </div>
            <FormSplitBill />
        </div>
    );
}

function FriendsList() {
    const friends = initialFriends;

    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}

function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {friend.balance} dollars
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owns you {friend.balance} dollars
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button>Select</Button>
        </li>
    );
}

function FormAddFriend() {
    return (
        <form className="form-add-friend">
            <label>👯 Friend name</label>
            <input type="text" />

            <label>📸 Image URL</label>
            <input type="text" />

            <Button>Add</Button>
        </form>
    );
}

function FormSplitBill() {
    return (
        <form className="form-split-bill">
            <h2>Split a bill with X</h2>

            <label>🤑 Bill value</label>
            <input type="text" />

            <label>🫵 Your expenses</label>
            <input type="text" />

            <label>🦍 X's expenses</label>
            <input type="text" disabled />

            <label>😵‍💫 Who is paying the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>
            <Button>Split bill</Button>
        </form>
    );
}

function Button({ children }) {
    return <button className="button">{children}</button>;
}
