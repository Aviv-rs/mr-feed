import { useEffect, useState } from 'react'
import { CommentList } from './comment-list'
import { commentService } from '../services/comment.service'

export const CommentSection = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        loadComments()
    }, [])

    const loadComments = async () => {
        try {
            const comments = await commentService.query()
            setComments(comments)
        } catch (err) {
            console.log(err)
        }
    }

    return <section className="comment-section flex space-between">

        <CommentList comments={comments} />

    </section>
}