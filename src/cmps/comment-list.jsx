import { CommentPreview } from "./comment-preview"

export const CommentList = ({ comments }) => {
    return <div className="comment-list flex column">
        {comments.map((comment, idx) =>
            <CommentPreview key={idx} comment={comment} />
        )}
    </div>
}