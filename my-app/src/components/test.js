import { ListGroup } from 'react-bootstrap';

export function ListItem({ name, avatarSrc }) {
    return (
        <ListGroup.Item action>
            <div className="d-flex align-items-center">
                <img
                    src={avatarSrc}
                    alt="Avatar"
                    className="rounded-circle me-3"
                    style={{ width: '40px', height: '40px' }}
                />
                <span>{name}</span>
            </div>
        </ListGroup.Item>
    );
}

function MyList() {
    const items = [
        { name: 'John Doe', avatarSrc: 'https://via.placeholder.com/40' },
        { name: 'Jane Doe', avatarSrc: 'https://via.placeholder.com/40' },
        { name: 'Mark Smith', avatarSrc: 'https://via.placeholder.com/40' },
    ];

    return (
        <div style={{ maxWidth: '163px' }}>
            <ListGroup>
                {items.map((item, index) => (
                    <ListItem key={index} name={item.name} avatarSrc={item.avatarSrc} />
                ))}
            </ListGroup>
        </div>
    );
}