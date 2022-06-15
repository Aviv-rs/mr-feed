import { useEffect, useState } from 'react'
import { CommentList } from './comment-list'
import { commentService } from '../services/comment.service'
import { socketService , SOCKET_EVENT_COMMENT_ADDED, SOCKET_EVENT_COMMENT_ABOUT_YOU} from '../services/socket.service'

export const CommentSection = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        loadComments()
    }, [])


    useEffect(() => {
        socketService.off(SOCKET_EVENT_COMMENT_ADDED, loadComments)
        socketService.on(SOCKET_EVENT_COMMENT_ADDED, loadComments)
        socketService.off(SOCKET_EVENT_COMMENT_ABOUT_YOU, loadComments)
        socketService.on(SOCKET_EVENT_COMMENT_ABOUT_YOU, loadComments)
        // if (stationId) {
        //     socketService.emit(SOCKET_EMIT_ENTERED_STATION, stationId)
        // }   

        loadComments()

        return () => {
            socketService.off(SOCKET_EVENT_COMMENT_ADDED, loadComments)
            socketService.off(SOCKET_EVENT_COMMENT_ABOUT_YOU, loadComments)
        }
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