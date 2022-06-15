import defaultAvatar from '../assets/imgs/default-avatar.png'

export const CommentPreview = ({ comment }) => {
    return <article className="comment-preview">
        <div className="comment-avatar-container">
            <img className="comment-avatar" src={comment.avatar || defaultAvatar} alt="" />
        </div>
        <div className="comment-details flex column">
            <h3 className="comment-email">
                {comment.email}
            </h3>

            <div className="comment-txt">
                {comment.txt}
            </div>
        </div>
    </article>
}