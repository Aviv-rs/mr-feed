export const CommentPreview = ({ comment }) => {
    return <div className="comment-preview">
        <div className="comment-img-container">
            <img className="comment-img" src={comment.imgUrl || ''} alt="" />
        </div>
        <h3 className="comment-title">
            {comment.email}
        </h3>

        <div className="comment-description">
            {comment.txt}
        </div>
    </div>
}