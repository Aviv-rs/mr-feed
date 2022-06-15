import React, { useState } from 'react'
import { commentService } from '../services/comment.service'

export const CommentAdd = () => {
    const [comment, setComment] = useState(commentService.getEmptyComment())

    const handleChange = ({ target: { name, value } }) => {
        setComment(prevComment => ({...prevComment, [name]: value }))
    }

    const onAddComment = async (ev) => {
        ev.preventDefault()
        await commentService.save(comment)
        setComment(commentService.getEmptyComment())
    }

    return (
        <form
            className="comment-add flex column align-center"
            onSubmit={onAddComment}
        >
            <div className="form-group">
                <input
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={comment.email}
                />
            </div>
            <div className="form-group">
                <textarea
                    required
                    placeholder="Message"
                    autoComplete="off"
                    name="txt"
                    onChange={handleChange}
                    value={comment.txt}
                    rows={5}
                />
            </div>
            <div className="submit-container">
                <button type="submit" className="btn-add-comment">
                    Submit
                </button>
            </div>
        </form>
    )
}
