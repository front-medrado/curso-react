import './styles.css'

export const PostCard = ({ title, cover, body, id }) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <h3 className='post-title'>{title} {id}</h3>
            <p>{body}</p>
        </div>
    </div>
);
