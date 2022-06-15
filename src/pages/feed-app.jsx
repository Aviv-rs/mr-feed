import { CommentAdd } from "../cmps/comment-add"
import { CommentSection } from "../cmps/comment-section"
export const FeedApp = () => {
    return <section className="feed-app flex align-center column">
        <h1 className="app-title">Mister Feed</h1>
        <CommentAdd />
        <CommentSection />
    </section>
}