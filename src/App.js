import { useState } from "react";

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
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleShowAddFriend = () => {
        setShowAddFriend((showAddFriend) => !showAddFriend);
    };

    const handleFriendsChange = (newFriend) => {
        setFriends((friends) => [...friends, newFriend]);
        setShowAddFriend(false);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList friends={friends} />
                {showAddFriend && <FormAddFriend onFriendsChange={handleFriendsChange} />}
                <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
            </div>
            {selectedFriend && <FormSplitBill />}
        </div>
    );
}

function FriendsList({ friends }) {
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

function FormAddFriend({ onFriendsChange }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://picsum.photos/seed/1/200/200");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) {
            return;
        }

        const id = crypto.randomUUID();

        const newFriend = {
            name,
            image,
            balance: 0,
            id,
        };
        onFriendsChange(newFriend);
        setName("");
        setImage("https://picsum.photos/seed/1/200/200");
    };

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👯 Friend name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>📸 Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

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

function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
